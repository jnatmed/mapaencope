const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '../..');
const appRoot = path.join(repoRoot, 'src', 'app');
const outputFile = path.join(__dirname, '..', 'src', 'database', 'seed-data.json');

const mojibakeMap = new Map([
  ['Ã¡', 'á'],
  ['Ã©', 'é'],
  ['Ã­', 'í'],
  ['Ã³', 'ó'],
  ['Ãº', 'ú'],
  ['Ã', 'Á'],
  ['Ã‰', 'É'],
  ['Ã', 'Í'],
  ['Ã“', 'Ó'],
  ['Ãš', 'Ú'],
  ['Ã±', 'ñ'],
  ['Ã‘', 'Ñ'],
  ['Ã¼', 'ü'],
  ['Ãœ', 'Ü'],
  ['â€“', '-'],
  ['â€œ', '"'],
  ['â€', '"'],
  ['â€™', "'"],
  ['â€˜', "'"],
  ['Â°', '°'],
  ['Âº', 'º'],
  ['Âª', 'ª'],
]);

function fixText(value) {
  let text = String(value || '');
  if (/[ÃÂâ]/.test(text)) {
    try {
      text = Buffer.from(text, 'latin1').toString('utf8');
    } catch (_error) {
      // Ignore decode failures and fall back to manual replacements below.
    }
  }
  for (const [from, to] of mojibakeMap) {
    text = text.split(from).join(to);
  }
  return text.replace(/\s+/g, ' ').replace(/\s([,.;:])/g, '$1').trim();
}

function cleanArrayLiteral(literal) {
  return literal
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .trim();
}

function evaluateArrayLiteral(literal) {
  return Function(`"use strict"; return (${cleanArrayLiteral(literal)});`)();
}

function parseAssignedArrays(tsContent) {
  const result = {};
  const assignmentRegex = /(?:this\.)?([A-Za-z0-9_]+)\s*=\s*(\[[\s\S]*?\]);/g;
  let match;

  while ((match = assignmentRegex.exec(tsContent)) !== null) {
    const [, variableName, arrayLiteral] = match;

    try {
      const parsed = evaluateArrayLiteral(arrayLiteral);
      if (Array.isArray(parsed)) {
        result[variableName] = parsed;
      }
    } catch (_error) {
      // Ignored on purpose: not every assignment is a plain array we can evaluate.
    }
  }

  return result;
}

function stripHtml(html) {
  return fixText(
    html
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
  );
}

function extractBlocks(htmlContent) {
  const blocks = [];
  const templateRegex = /<ng-template\s+#([A-Za-z0-9_]+)[^>]*>([\s\S]*?)<\/ng-template>/g;
  let match;

  while ((match = templateRegex.exec(htmlContent)) !== null) {
    blocks.push({ name: match[1], html: match[2] });
  }

  if (blocks.length === 0) {
    blocks.push({ name: 'default', html: htmlContent });
  }

  return blocks;
}

function parseBlock(blockHtml) {
  const titleMatches = [...blockHtml.matchAll(/<h1([^>]*)>([\s\S]*?)<\/h1>/gi)];
  const preferredTitle = titleMatches.find((match) => !/titProv/i.test(match[1])) || titleMatches[0];
  const detailMatch = blockHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const imageVarMatch = blockHtml.match(/<slide[^>]*\*ngFor="let\s+\w+\s+of\s+([A-Za-z0-9_]+)"/i);
  const workshopVarMatch = blockHtml.match(/<tr[^>]*\*ngFor="let\s+\w+\s+of\s+([A-Za-z0-9_]+)"/i);
  const staticImages = [...blockHtml.matchAll(/<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"/gi)].map(
    (match, index) => ({
      imageUrl: fixText(match[1]).replace(/^\.\//, '/'),
      altText: fixText(match[2]),
      displayOrder: index,
    })
  );

  return {
    name: preferredTitle ? stripHtml(preferredTitle[2]) : '',
    detailText: detailMatch ? stripHtml(detailMatch[1]).replace(/^Detalle de trabajo\s*/i, '') : '',
    imageVar: imageVarMatch ? imageVarMatch[1] : null,
    workshopVar: workshopVarMatch ? workshopVarMatch[1] : null,
    staticImages,
  };
}

function parseProvinceDefinitions() {
  const file = path.join(appRoot, 'pages', 'mapa-argentina', 'mapa-argentina.component.ts');
  const content = fs.readFileSync(file, 'utf8');
  const objectRegex = /\{\s*'provincia_id':\s*'([^']+)'\s*,[\s\S]*?'nombreProvincia':\s*'([^']+)'\s*,[\s\S]*?'component':\s*([^,\n]+)\s*,[\s\S]*?'fill':\s*([^,\n}]+)/g;
  const provinces = [];
  let match;

  while ((match = objectRegex.exec(content)) !== null) {
    const [, provinceId, rawName, rawComponent, rawFill] = match;
    const component = rawComponent.trim().replace(/Component$/, '').trim();
    provinces.push({
      legacyId: Number(provinceId),
      name: fixText(rawName),
      slug: fixText(rawName)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, ''),
      componentName: component === "''" ? null : `${component}Component`,
      fillColor: rawFill.includes('fillCONTALLERES') ? '#4d646b' : '#5DC1B9',
    });
  }

  return provinces;
}

function deriveAbbreviation(name, code) {
  if (code) {
    return fixText(code).replace(/\s+/g, '');
  }

  const normalized = fixText(name);
  const knownAbbreviations = new Map([
    ['Complejo Penitenciario Federal I - Ezeiza', 'CPF1'],
    ['Complejo Penitenciario Federal II - Marcos Paz', 'CPF2'],
    ['Complejo Penitenciario Federal IV de Mujeres - Ezeiza', 'CPF4'],
    ['Complejo Penitenciario Federal VII de Mujeres - Ezeiza', 'CPFVII'],
    ['Unidad 19 - Colonia Penal de Ezeiza', 'U19'],
    ['Unidad 34 - Instituto Penal Federal de Campo de Mayo', 'U34'],
    ['Complejo Federal de Jóvenes Adultos - Marcos Paz', 'CFJA'],
    ['Complejo Federal de Jóvenes Adultos – Marcos Paz', 'CFJA'],
    ['Complejo Penitenciario Federal de la Ciudad Autónoma de Buenos Aires - DEVOTO', 'CPFCABA'],
  ]);

  if (knownAbbreviations.has(normalized)) {
    return knownAbbreviations.get(normalized);
  }

  if (/Ciudad Autónoma de Buenos Aires|DEVOTO/i.test(normalized)) {
    return 'CPFCABA';
  }

  if (/Jóvenes Adultos/i.test(normalized)) {
    return 'CFJA';
  }

  const unidadMatch = normalized.match(/\bUnidad\s+(\d+)\b/i);
  if (unidadMatch) {
    return `U${unidadMatch[1]}`;
  }

  const cpfRomanMatch = normalized.match(/\bComplejo Penitenciario Federal\s+([IVXLC]+)\b/i);
  if (cpfRomanMatch) {
    return `CPF${cpfRomanMatch[1].toUpperCase()}`;
  }

  const cpfNumberMatch = normalized.match(/\bComplejo Penitenciario Federal\s+(\d+)\b/i);
  if (cpfNumberMatch) {
    return `CPF${cpfNumberMatch[1]}`;
  }

  return null;
}

function componentFileBase(componentName) {
  return componentName
    .replace(/Component$/, '')
    .replace(/[A-Z]/g, (letter, index) => (index ? `-${letter.toLowerCase()}` : letter.toLowerCase()));
}

function parseProvinceDetail(componentName) {
  const baseName = componentFileBase(componentName);
  const componentDir = path.join(appRoot, 'component', baseName);
  const tsPath = path.join(componentDir, `${baseName}.component.ts`);
  const htmlPath = path.join(componentDir, `${baseName}.component.html`);

  if (!fs.existsSync(tsPath) || !fs.existsSync(htmlPath)) {
    return [];
  }

  const tsContent = fs.readFileSync(tsPath, 'utf8');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const arrays = parseAssignedArrays(tsContent);
  const blocks = extractBlocks(htmlContent);

  return blocks
    .map((block, index) => {
      const parsed = parseBlock(block.html);
      const workshops = Array.isArray(arrays[parsed.workshopVar])
        ? arrays[parsed.workshopVar].map((item, workshopIndex) => ({
            name: fixText(item.nombre_de_taller),
            workersCount: Number(item.cantidad_de_internos_trabajadores) || 0,
            displayOrder: workshopIndex,
          }))
        : [];

      const images = Array.isArray(arrays[parsed.imageVar])
        ? arrays[parsed.imageVar].map((item, imageIndex) => ({
            imageUrl: fixText(item.src).replace(/^\.\//, '/'),
            altText: fixText(item.alt),
            displayOrder: imageIndex,
          }))
        : parsed.staticImages;

      if (!parsed.name) {
        return null;
      }

      const code = parsed.name.match(/\b(U\.?\s?\d+|U\d+|CPF\s?[IVX0-9A-Z-]+|CPFCABA|CFJA)\b/i)?.[1]?.replace(/\s+/g, ' ') || null;

      return {
        name: parsed.name,
        code,
        abbreviation: deriveAbbreviation(parsed.name, code),
        detailText: parsed.detailText || null,
        displayOrder: index,
        workshops,
        images,
      };
    })
    .filter(Boolean);
}

function buildSeedData() {
  const provinces = parseProvinceDefinitions();

  const data = provinces.map((province, index) => ({
    ...province,
    displayOrder: index,
    hasDetail: Boolean(province.componentName),
    units: province.componentName ? parseProvinceDetail(province.componentName) : [],
  }));

  return { provinces: data };
}

const data = buildSeedData();
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));

const provinceCount = data.provinces.length;
const unitCount = data.provinces.reduce((sum, province) => sum + province.units.length, 0);
const workshopCount = data.provinces.reduce(
  (sum, province) => sum + province.units.reduce((inner, unit) => inner + unit.workshops.length, 0),
  0
);

console.log(`Seed data generated: ${provinceCount} provinces, ${unitCount} units, ${workshopCount} workshops`);

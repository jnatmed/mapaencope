export interface MapWorkshop {
  id: number;
  name: string;
  workersCount: number;
  displayOrder: number;
}

export interface MapUnitImage {
  id: number;
  imageUrl: string;
  altText: string;
  displayOrder: number;
}

export interface MapUnit {
  id: number;
  name: string;
  code: string | null;
  abbreviation: string | null;
  description: string | null;
  detailText: string | null;
  displayOrder: number;
  workshops: MapWorkshop[];
  images: MapUnitImage[];
}

export interface MapProvince {
  id: number;
  name: string;
  slug: string;
  mapKey: string | null;
  fillColor: string | null;
  hasDetail: boolean;
  displayOrder: number;
  units: MapUnit[];
}

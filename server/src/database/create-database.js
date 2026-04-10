const path = require('path');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

async function main() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  });

  await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
  );

  await connection.end();
  console.log(`Base de datos lista: ${process.env.DB_DATABASE}`);
}

main().catch((error) => {
  console.error('No se pudo crear la base de datos:', error.message);
  process.exit(1);
});

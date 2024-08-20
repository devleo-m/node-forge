npm init -y
npm install express body-parser express-validator multer pg sequelize typescript @types/node @types/express ts-node
npm install typescript --save-dev
npx tsc --init

npx ts-node src/scripts/init-db.ts // inicializa o banco de dados
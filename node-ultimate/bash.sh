# Comandos para a criacao deste projetos:
npm init -y
npm install express sequelize pg pg-hstore
npm install typescript ts-node @types/node @types/express @types/sequelize --save-dev
npm install --save-dev typescript @types/node @types/express ts-node nodemon jest @types/jest ts-jest dotenv
npm install swagger-ui-express swagger-jsdoc
npm install jest @types/jest ts-jest --save-dev
npx ts-jest config:init
npm install dotenv
npx tsc --init

# Estrutura de Diretórios
# Crie a estrutura de diretórios do projeto:
mkdir -p src/adapters/in/http src/adapters/out/database src/application/ports/in src/application/ports/out src/application/services src/domain src/config

  

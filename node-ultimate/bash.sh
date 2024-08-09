# Comandos para a criacao deste projetos:
npm init -y
npm install express sequelize pg pg-hstore
npm install typescript ts-node @types/node @types/express @types/sequelize --save-dev
npm install --save-dev typescript @types/node @types/express ts-node nodemon jest @types/jest ts-jest dotenv
npm install swagger-ui-express swagger-jsdoc
npm i --save-dev @types/swagger-ui-express
npm i --save-dev @types/swagger-jsdoc
npm install jest @types/jest ts-jest --save-dev
npm i --save-dev @types/yamljs
npx ts-jest config:init
npm install dotenv
npx tsc --init

# Estrutura de Diretórios
# Crie a estrutura de diretórios do projeto:
mkdir -p src/application/services src/domain/models src/domain/repositories src/infrastructure/database src/infrastructure/repositories src/infrastructure/adapters/in src/infrastructure/adapters/out src/interfaces/controllers src/interfaces/repositories && touch src/application/services/UserService.ts src/domain/models/UserModel.ts src/domain/repositories/UserRepository.ts src/infrastructure/database/database.ts src/infrastructure/repositories/UserRepositoryImpl.ts src/infrastructure/adapters/in/UserController.ts src/infrastructure/adapters/out/DatabaseAdapter.ts src/interfaces/controllers/UserController.ts src/interfaces/repositories/UserRepositoryImpl.ts src/web/server.ts
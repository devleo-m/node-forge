import sequelize from "../config/database";
import Product from "../model/product";

async function init() {
    await sequelize.sync({ force: true });
    console.log("Tabelas criadas com sucesso!");

    await Product.create({
        name: "Product 1",
        price: 10
    });
}

init().catch(e => console.log(e))

import { Sequelize } from "sequelize";


const sequelize = new Sequelize('postgres://postgres:Durbin%402022@localhost:5432/database_development',{
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: false,
    },});

    

export default sequelize;
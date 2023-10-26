import {Sequelize} from "sequelize";

const db = new Sequelize('upload_db','root','',{
    host: 'localhost',
    port: 8111,
    dialect: "mysql"
});

export default db;
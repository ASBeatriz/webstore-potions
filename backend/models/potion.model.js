import { DataTypes } from "sequelize"
import sequelize from "./dbconfig.js"

const Potion = sequelize.define("Potion", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: {
        type: DataTypes.TEXT
    },

    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    imagem: {
        type: DataTypes.STRING
    }
})

export default Potion
import express from "express"
import router from "./routes/api.routes.js"
import sequelize from "./models/dbconfig.js"
import cors from "cors";


const PORT = 3000
const app = express()

app.use(cors());
app.use(express.json())
app.use(router)

// manda o Sequelize criar todas as tabelas definidas nos models
await sequelize.sync()

console.log("Banco sincronizado")

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

app.use(
    "/uploads",
    express.static("uploads")
)
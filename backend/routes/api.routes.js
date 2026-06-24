import express from "express"
import Potion from "../models/potion.model.js"
import upload from "../media/media.uploader.js"

const router = express.Router()

router.get("/test", (req, res) => {
    res.json({
        message: "Servidor funcionando"
    })
})

router.post("/test", (req, res) => {
    console.log(req.body)

    res.json({
        recebido: req.body
    })
})

//upload.single é um middleware que preenche o req.file com as informações do arquivo enviado

// o parâmetro de single deve ser exatamente o nome do campo do formulário que contém o arquivo
router.post("/potions", upload.single("imagem"), async (req, res) => {

    console.log(req.body)
    console.log(req.file)

    const potion = await Potion.create({
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        imagem: req.file.path
    })

    res.status(201).json(potion)
})

router.get("/potions", async (req, res) => {

    const potions = await Potion.findAll()
    
    res.json(potions)
})

router.delete("/potions/:id", async (req, res) => {

    const deletedRows = await Potion.destroy({
        where: {
            id: req.params.id
        }
    })

    if (deletedRows === 0) {
        return res.status(404).json({
            erro: "Poção não encontrada"
        })
    }

    res.status(200).json({
        mensagem: "Poção removida"
    })
})


router.get("/potions/:id", async (req, res) => {

    const potion = await Potion.findByPk(req.params.id)

    if (!potion) {
        return res.status(404).json({
            erro: "Poção não encontrada"
        })
    }

    res.json(potion)
})

export default router
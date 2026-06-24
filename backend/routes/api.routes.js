import express from "express"
import upload from "../media/media.uploader.js"
import { potionController } from "../controllers/potion.controller.js"

const router = express.Router()

//upload.single é um middleware que preenche o req.file com as informações do arquivo enviado

// o parâmetro de single deve ser exatamente o nome do campo do formulário que contém o arquivo
// router.post("/potions", async (req, res) => {
router.post("/potions", upload.single("imagem"), potionController.addPotion)

router.get("/potions", potionController.getAll)

router.delete("/potions/:id", potionController.deleteById)

router.get("/potions/:id", potionController.getById)

export default router
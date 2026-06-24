import Potion from "../models/potion.model.js"

import { unlink } from 'fs/promises';

export const potionController = {
    // Adiciona um poção
    async addPotion(req, res){

        console.log(req.body)
        console.log(req.file)

        const potion = await Potion.create({
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: req.body.preco,
            imagem: req.file.path
        })

        res.status(201).json(potion)
    },


    // Recupera todas as poções
    async getAll(req, res){

        const potions = await Potion.findAll()
        
        res.json(potions)
    },

    // Recupera uma poção específica
    async getById(req, res){

        const potion = await Potion.findByPk(req.params.id)

        if (!potion) {
            return res.status(404).json({
                erro: "Poção não encontrada"
            })
        }

        res.json(potion)
    },

    // Deleta uma poção específica
    async deleteById(req, res) {

        const potion = await Potion.findByPk(req.params.id)

        if (!potion) {
            return res.status(404).json({
                erro: "Poção não encontrada"
            })
        }

        // Remove a imagem, se existir
        if (potion.imagem) {
            try {
                await unlink(potion.imagem)
            } catch (err) {
                console.log(
                    "Não foi possível remover a imagem:",
                    err.message
                )
            }
        }

        await potion.destroy()

        res.json({
            mensagem: "Poção removida"
        })
    }

}



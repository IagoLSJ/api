const db = require("../database/mongo")
const Booking = require("../models/Booking")

const list = async (_, res) => {
    try{
        const bookings = await Booking.find()
        res.send(bookings)
    }catch(error){
        res.send("Erro")
    }
}

const listById = async (req, res) => {
    const id = req.params.id

    try{
        const booking = await Booking.findOne({_id: id})
        res.send(booking)
    }catch(error){
        res.send("Erro")
    }
}

const create = async  (req, res) => {
    const booking = {nome, preco, funcionarioId, clienteId, servicoId} = req.body
    try{
        await Booking.create(booking)
        res.send("Usuário criado com sucesso")
    }catch(error){
        res.send("Erro")
    }
}

const edit = async (req, res) => {
    const booking = {nome, preco, funcionarioId, clienteId, servicoId} = req.body
    const id = req.params.id
    try{
        await Booking.updateOne({_id:id}, booking)
        res.send("Usuário atualizado com sucesso")
    }catch(error){
        res.send("error")
    }
}

const deleteById = async (req, res) => {
    const id = req.params.id;
    
    const service = await Booking.findOne({ _id: id });
    
    if (!service) {
      return res.status(400).json({ Menssage: "Atendimento não encontrado" });
    }

    try {
      await Booking.deleteOne({ _id: id });
      res.send("Usuário deletado com sucesso")
    }catch(error){
        res.send("error")
    }
}

module.exports = {
    list,
    listById,
    create,
    edit,
    deleteById
}
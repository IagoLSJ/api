const DB = require("../database/mongo")
const Functionary = require("../models/Functionary")

const createFunctionary = async (req, res)=>{
  const {cpf, nome, salario, profissoes} = req.body
    const functionary = {
        cpf,
        nome,
        salario,
        profissoes,
    }

    try{
        await Functionary.create(functionary)
        res.json(functionary)
    }catch(erro){
        res.send("Erro")
    }
}

const listFuncionary = async (req, res)=>{
  try{
    const people = await Functionary.find()
    res.json(people)
}catch(erro){
}
}

const listById = async (req, res)=>{
  const id = req.params.id

    try{
        const person = await Functionary.findOne({_id: id})
        res.json(person)
    }catch(erro){
        res.send("erro")
    }
}

const edit = async(req, res) =>{
  const id = req.params.id
    const {cpf, nome, salario, profissoes} = req.body

    const functionary = {
        cpf,
        nome,
        salario,
        profissoes,
    }
    
    try{
        const updateFunctionary = await Functionary.updateOne({_id: id}, functionary)
        res.json(functionary)
    }catch(erro){
        res.send("erro")
    }
}

const deleteById = async (req, res)=>{
  const id = req.params.id

    const person = await Functionary.findOne({_id: id})


    if(!person){
        res.send("Usuário não existe")
        return
    }

    try{
        await Functionary.deleteOne({_id: id})
        res.send("Usuário deletado com sucesso")
    }catch(erro){
        res.send("Erro")
    }
}
module.exports = {
  createFunctionary,
  listFuncionary,
  listById,
  edit,
  deleteById
}
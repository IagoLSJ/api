const DB = require("../database/mongo")
const Functionary = require("../models/Functionary.js")

const createFunctionary = async (req, res)=>{
  const {cpf, nome, salario, profissoes} = req.body

    const functionary = {
        cpf,
        nome,
        salario,
        profissoes,
    }

    try{
        await DB
        res.send("Deu certo")
    }catch(erro){
        res.json("Deu certo")
    }
}


module.exports = {
  createFunctionary
}
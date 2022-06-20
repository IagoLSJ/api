const express = require("express")
const app = express()


const functionaryRouter = require("./routes/FunctionaryRouter.js")

app.use(
    express.urlencoded(
        {extended: true}
    )
)
app.use(express.json())

//Routes
app.use("/Functionary", functionaryRouter)

app.listen(3000, ()=>{
    console.log(`Server rodando na porta http://localhost:3000/`);
})

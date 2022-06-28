const express = require("express")
const app = express()

const EmployeeRouter = require("./routes/EmployeeRouter")
const ClientRouter = require("./routes/ClientRouter")

app.use(
    express.urlencoded(
        {extended: true}
    )
)

app.use(express.json())

//Routes
app.use("/Employee", EmployeeRouter)
app.use("/Client", ClientRouter)

app.listen(3000, ()=>{
    console.log(`Server rodando na porta http://localhost:3000/`);
})

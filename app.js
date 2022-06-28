const express = require("express")
const app = express()

const DB = require("./database/mongo")
const EmployeeRouter = require("./routes/EmployeeRouter")
const ClientRouter = require("./routes/ClientRouter")
const ServiceRouter = require("./routes/ServiceRouter")

app.use(
    express.urlencoded(
        {extended: true}
    )
) 

app.use(express.json())

//Routes
app.use("/Employee", EmployeeRouter)
app.use("/Client", ClientRouter)
app.use("/Service", ServiceRouter)

app.listen(3000, ()=>{
    console.log(`Server rodando na porta http://localhost:3000/`);
})

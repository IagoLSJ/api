const express = require("express")
const app = express()

const EmployeeRouter = require("./routes/EmployeeRouter")
const ClientRouter = require("./routes/ClientRouter")
const ServiceRouter = require("./routes/ServiceRouter")
const BookingRoute = require("./routes/BookingRoute")

app.use(
    express.urlencoded(
        {extended: true}
    )
) 

app.use(express.json())

//Routes
app.use("/employee", EmployeeRouter)
app.use("/client", ClientRouter)
app.use("/service", ServiceRouter)
app.use("/booking", BookingRoute)

app.listen(3000, ()=>{
    console.log(`Server rodando na porta http://localhost:3000/`);
})

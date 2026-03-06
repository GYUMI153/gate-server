const express = require("express")

const app = express()

app.use(express.json())

let gates = []

app.get("/", (req,res)=>{
res.send("Gate Server Running")
})

app.post("/gate",(req,res)=>{
const gate = {
id: Date.now(),
type: req.body.type,
user: req.body.user
}

gates.push(gate)

res.json(gate)
})

app.get("/gates",(req,res)=>{
res.json(gates)
})

app.listen(3000,()=>{
console.log("Gate server started")
})

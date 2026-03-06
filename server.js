const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
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

function accessGate(user){
return {status:"ACCESS_OK"}
}

function authGate(user){
return {status:"AUTH_OK"}
}

function transactionGate(user){
return {status:"TX_OK"}
}

function paymentGate(user){
return {status:"PAYMENT_OK"}
}

app.post("/runGate",(req,res)=>{

const user = req.body.user

const access = accessGate(user)
const auth = authGate(user)
const tx = transactionGate(user)
const payment = paymentGate(user)

res.json({
access,
auth,
tx,
payment
})

})

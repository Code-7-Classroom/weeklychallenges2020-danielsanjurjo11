let express = require('express')

let app = express()

let data = require('./public/employees.json')

app.get('/test', function(req,res){

    res.send("Hello World")

})


app.get('/employees', (req,res) => {
    
    if(!data){
        res.status(404).send(`couldn't find the employees`)
    }

    res.send(data)

})


app.get('/employees/:id', function (req,res){

     const sData = data.employees.find(function(employees){
        console.log(employees.id)

        return parseInt(req.params.id) === employees.id
    })

     if(!sData){
        res.status(404).send(`couldn't find the employees`)
    }

    res.send(sData)


})


const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})
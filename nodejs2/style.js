const express = require('express')

const app = express();

const data = require('./public/employees.json')

app.use(express.json());

//Get
app.get('/',(req,res) => {
        res.status(200).send(`Hello employees`);
    });

app.get('/employees', (req,res) => {
     if (!data && !data.employees) {
         res.status(404).send(`coud not find the employees`);
     }
     res.status(200).send(data.employees);
    });

//Post
    app.post("/employees", function (req, res){
        const sData = {
            id: data.emloyees.length + 1,
            name: req.body.name,
            salary: req.body.salary,
            job: req.body.job
        };
        if (!sData) {
            res.status(404).send(`could not add student`);
        }

        data.employees.push(sData);

        res.status(200).send(sData);

    });
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const path = './app/users.json';

const saveData = (data) => {
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(path, stringifyData)
}

const getData = () => {
  const jsonData = fs.readFileSync(path)
  return JSON.parse(jsonData)    
}

app.get('/users', (req,res) => {

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});


app.post('/users', (req, res) => {

  let users = getData();
  let id = Math.floor(100000 + Math.random() * 900000)
  users[id] = req.body;
  console.log(users);
  saveData(users);
  res.send({success: true, msg: 'user data added successfully'})

})


app.put('/users/:id',  (req, res) => {

    let users = getData();
    fs.readFile(path, 'utf8', (err, data) => {
      const userId = req.params['id'];
      users[userId] = req.body;
      saveData(users);
      res.send(`user with id ${userId} has been updated`)
    }, true);

  });
  

  app.delete('/users/:id', (req, res) => {

    fs.readFile(dataPath, 'utf8', (err, data) => {
      let users = getData();
      const userId = req.params['id'];
      delete users[userId];  
      saveData(users);
      res.send(`user with id ${userId} has been deleted`)
    }, true);

  })
 

app.listen(8000, () => {
   console.log("Listening on port 5000...")
});
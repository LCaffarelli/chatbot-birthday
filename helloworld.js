import express from 'express'

const PORT = 3000;
const app = express();



app.use(express.json());

app.listen(3000, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`);
});


// Afficher Hello World !
app.post('/api/helloworld', (req, res) => {
    res.send("Hello World POST");
});
 app.get('/api/helloworld', (req, res) => {
    res.send("Hello World GET");
});


// Afficher hello world de manière personnalisée
app.post('/api/hello', (req,res)=>{
    console.log(`helloWorld`)
    res.send(req.body)
})



import express from 'express'

const PORT = 3000;
const app = express();



app.use(express.json());

app.listen(3000, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`);
});


// Afficher Hello World 
app.post('/api/helloworld', (req, res) => {
    res.send("Hello World POST");
});

//Pour le navigateur
app.get('/api/helloworld', (req, res) => {
    res.send("Hello World GET");
});


// Afficher hello world de manière personnalisée
app.post('/api/hello', (req, res) => {
    //création des constantes pour récuperer les éléments du message
    const { text } = req.body.message;
    const { displayName } = req.body.message.sender;
    const { espace } = req.body.space;

    // Permet de renvoyer directement du JSon dans le content-type
    res.json({ texte: text + espace + displayName })

    //    Autre solution, mais  ne change pas le content type en JSON, il reste en texte/HTML
    //    res.send(JSON.stringify(text+espace+displayName))



})



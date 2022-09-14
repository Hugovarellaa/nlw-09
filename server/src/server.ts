import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
  res.json([
    { id: 1, name: "anuncio 1"},
    { id: 2, name: "anuncio 2"},
    { id: 3, name: "anuncio 3"},
    { id: 4, name: "anuncio 4"},
    { id: 5, name: "anuncio 5"},
    { id: 6, name: "anuncio 6"}
  ]);
})

app.listen(3333, ()=> console.log("Serer listen in PORT 3333"))
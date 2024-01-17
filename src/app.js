import express from "express";

const app = express();
app.use(express.json()); //middleware está convertendo pra json as reqisições

const carros =[
    {
        id: 0,
        nome: "monza",
        marca: "chevrolet",
        ano: 1988
    },
    {
        id: 1,
        nome: "chevette",
        marca: "chevrolet",
        ano: 1993
    },
    {
        id: 2,
        nome: "golf gti",
        marca: "volkswagen",
        ano: 2003
    },
    {
        id: 3,
        nome: "monza",
        marca: "chevrolet",
        ano: 1975
    }
]

function buscadorCarro(id){
    return carros.findIndex(carros => {
        return carros.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("curso de nodezin")
})

app.get("/carros", (req, res) => {
    res.status(200).json(carros)
})

app.get("/carros/:id", (req, res) => {
    const index = buscadorCarro(req.params.id)
    res.status(200).json(carros[index])
})

app.post("/carros", (req, res) => {
    carros.push(req.body)
    res.status(201).send("carro criado")
})

app.put("/carros/:id", (req, res) => {
    const index = buscadorCarro(req.params.id)
    carros[index].nome =req.body.nome
    res.status(200).send("carro editado")

})

app.delete("/carros/:id", (req, res) => {
    const index = buscadorCarro(req.params.id)
    carros.splice(index, 1)
    res.status(200).send("carro deletado")
})

export default app;

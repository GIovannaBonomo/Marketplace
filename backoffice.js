const tabella = document.getElementById("tabella")

async function fetchTab() {
    try {
        const res = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            //method : "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViY2Q4MDk2OGRlNTAwMTU1MmEzZWYiLCJpYXQiOjE3NTA4NDc3NjIsImV4cCI6MTc1MjA1NzM2Mn0.n5Cv3h7wVlVq9mmf518h8b5gVjHh6TWnyYzHVilMvGI",
            }
        })
        const data = await res.json()
        console.log(data)
        inputProd(data)
    }
    catch (e) {
        console.log(e)
    }
}
fetchTab()

function inputProd(prodotti) {
    tabella.innerHTML = " "
    const productTr = prodotti.map(prodotto => creaTabella(prodotto))
    tabella.append(...productTr)
}

function creaTabella(prodotto) {
    const tr = document.createElement("tr")
    const azioni = document.createElement("td")
    const name = document.createElement("td")
    name.innerText = prodotto.name
    const foto = document.createElement("td")
    foto.innerText = prodotto.imageUrl
    const brand = document.createElement("td")
    brand.innerText = prodotto.brand
    const prezzo = document.createElement("td")
    prezzo.innerText = prodotto.price

    const modifica = document.createElement("a")
    modifica.classList.add("btn", "btn-success", "me-3")
    modifica.innerText = "Modifica"
    modifica.href = `edit.html?id=${prodotto._id}`

    const elimina = document.createElement("button")
    elimina.classList.add("btn", "btn-danger")
    elimina.innerText = "Elimina"
    elimina.addEventListener("click", () => removerProduct(prodotto._id, tr))

    azioni.append(modifica, elimina)


    tr.append(name, foto, brand, prezzo, azioni)

    return tr
}

async function removerProduct(id, tr) {
    try {
        const res = await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViY2Q4MDk2OGRlNTAwMTU1MmEzZWYiLCJpYXQiOjE3NTA4NDc3NjIsImV4cCI6MTc1MjA1NzM2Mn0.n5Cv3h7wVlVq9mmf518h8b5gVjHh6TWnyYzHVilMvGI"
            }
        })
    }
    catch (e) {
        console.error(e)
    }
    fetchTab()
}

const nome = document.getElementById("name")
const foto = document.getElementById("imageUrl")
const brand = document.getElementById("brand")
const prezzo = document.getElementById("prezzo")

async function saveProduct() {
    const dataProduct = {
        name: nome.value,
        imageUrl: foto.value,
        brand: brand.value,
        description: descrizione.value,
        price: prezzo.value,

    }
    console.log(dataProduct)
    try {
        const res = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "POST",
            body: JSON.stringify(dataProduct),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViY2Q4MDk2OGRlNTAwMTU1MmEzZWYiLCJpYXQiOjE3NTA4NDc3NjIsImV4cCI6MTc1MjA1NzM2Mn0.n5Cv3h7wVlVq9mmf518h8b5gVjHh6TWnyYzHVilMvGI",
                "Content-Type": "application/json",
            }
        })
        const data = await res.json()
        const prodottiSalvati = JSON.parse(localStorage.getItem("prodotti"))
        prodottiSalvati.push(data)
        localStorage.setItem("prodotti", JSON.stringify(prodottiSalvati))
        fetchTab()
    }
    catch (e) {
        console.log(e)
    }
}



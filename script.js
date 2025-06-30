const card = document.querySelector(".container")

async function fetchProdotti() {

    const res = await fetch("https://striveschool-api.herokuapp.com/api/product/", {

        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViY2Q4MDk2OGRlNTAwMTU1MmEzZWYiLCJpYXQiOjE3NTA4NDc3NjIsImV4cCI6MTc1MjA1NzM2Mn0.n5Cv3h7wVlVq9mmf518h8b5gVjHh6TWnyYzHVilMvGI",
        }
    })
    const data = await res.json()
    console.log(data)

    data.forEach(prodotto => {
        const carD = creaCard(prodotto)
        card.appendChild(carD)
    })

}
fetchProdotti()

function creaCard(prodotto) {
    const col = document.createElement("div")
    col.className = "col-md-3 mb-5 col-sm-6 col-12 d-flex"

    const card = document.createElement("div")
    card.className = "card shadow-sm border-0 rounded-4 w-100 hover-shadow"

    const img = document.createElement("img")
    img.className = "card-img-top rounded-top-4"
    img.src = prodotto.imageUrl
    img.style.height = "250px"
    img.style.objectFit = "contain"

    const cardbody = document.createElement("div")
    cardbody.className = "card-body d-flex flex-column justify-content-between"

    const title = document.createElement("h5")
    title.className = "card-title mb-2"
    title.innerText = prodotto.name

    const brand = document.createElement("p")
    brand.className = "card-text"
    brand.innerText = "Brand: " + prodotto.brand

    const price = document.createElement("p")
    price.className = "card-text"
    price.innerText = "Prezzo €" + prodotto.price

    const info = document.createElement("a")
    info.className = "btn btn-dark"
    info.textContent = "Maggiori Info"
    info.href = `dettagli.html?id=${prodotto._id}`

    col.append(card)
    card.append(img, cardbody)
    cardbody.append(title, brand, price, info)

    return col
}

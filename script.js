const card = document.querySelector(".container")

async function fetchProdotti() {
    
    const res = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
    
     headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViY2Q4MDk2OGRlNTAwMTU1MmEzZWYiLCJpYXQiOjE3NTA4NDc3NjIsImV4cCI6MTc1MjA1NzM2Mn0.n5Cv3h7wVlVq9mmf518h8b5gVjHh6TWnyYzHVilMvGI",
}   
    })
    const data = await res.json()
    console.log (data)

    data.forEach(prodotto => {
    const carD = creaCard(prodotto)
    card.appendChild(carD)
})

}
fetchProdotti()

function creaCard(prodotto){
    const col = document.createElement("div")
    col.className = "col-md m-4"

    const card = document.createElement("div")
    card.className = "card h-100"

    const img = document.createElement("img")
    img.className = "img-fluid w-100"
    img.src = prodotto.imageUrl

    const cardbody = document.createElement("div")
    cardbody.className = "card-body"

    const title = document.createElement("h5")
  title.className = "card-title"
  title.innerText = prodotto.name

  const desc = document.createElement("p")
  desc.className = "card-text"
  desc.innerText = prodotto.description

  const brand = document.createElement("p")
  brand.className = "card-text"
  brand.innerText = "brand" + prodotto.brand

  const price = document.createElement("p")
  price.className = "card-text"
  price.innerText = "Prezzo €"+ prodotto.price

  col.append(card)
  card.append(img, cardbody)
  cardbody.append(title, desc, brand, price)

    return col
}

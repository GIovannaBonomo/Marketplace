const container = document.getElementById("container-dettagli")

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

async function fetchProductById(id) {
  try {
    const res = await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViY2Q4MDk2OGRlNTAwMTU1MmEzZWYiLCJpYXQiOjE3NTA4NDc3NjIsImV4cCI6MTc1MjA1NzM2Mn0.n5Cv3h7wVlVq9mmf518h8b5gVjHh6TWnyYzHVilMvGI",
      }
    })
    const prodotto = await res.json()
    infoProd(prodotto)

  } catch (e) {
    console.log(e)
  }
}



function infoProd(prodotto){
    container.innerHTML= " "
    container.className = "w-100 my-5 d-flex align-items-start gap-4 p-4 border rounded shadow"

    const img = document.createElement("img")
    img.src = prodotto.imageUrl
    img.className = "img-fluid"
    img.style.width = "400px"

    const containerBody = document.createElement("div")
    containerBody.className = "d-flex flex-column justify-content-center"    
    
    const title = document.createElement("h3")
    title.className = "card-title mb-2"
    title.textContent = prodotto.name

    const categoria = document.createElement("h5")
    categoria.className = "card-category mb-2"
    categoria.textContent = `Categoria: ${prodotto.category}`      
    
    const prezzo = document.createElement("p")
    prezzo.className = "card-text text-success"
    prezzo.textContent = `€ ${prodotto.price}`

    const brand = document.createElement("p")
    brand.className = "card-category mb-2"
    brand.textContent = `Brand: ${prodotto.brand}` 
    
    const descrizione = document.createElement("p")
    descrizione.className = "card-text mb-2"
    descrizione.textContent = prodotto.description
            
    container.append(img,containerBody)
    containerBody.append(title, categoria,prezzo, brand, descrizione)

    return container
    
}
fetchProductById(id)
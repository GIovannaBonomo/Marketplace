const nome = document.getElementById("name")
const foto = document.getElementById("imageUrl")
const brand = document.getElementById("brand")
const prezzo = document.getElementById("prezzo")
const descrizione = document.getElementById("descrizione")

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

    nome.value = prodotto.name
    foto.value = prodotto.imageUrl
    brand.value = prodotto.brand
    prezzo.value = prodotto.price
    descrizione.value = prodotto.description
  } catch (e) {
    console.log(e)
  }
}

async function editProduct(){
    const dataProduct= {
        name: nome.value,
        imageUrl: foto.value,
        brand: brand.value,
        description : descrizione.value,
        price: prezzo.value,

    } 
    console.log(dataProduct)
  try {
        const res = await fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method : "PUT",
    body : JSON.stringify(dataProduct),
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViY2Q4MDk2OGRlNTAwMTU1MmEzZWYiLCJpYXQiOjE3NTA4NDc3NjIsImV4cCI6MTc1MjA1NzM2Mn0.n5Cv3h7wVlVq9mmf518h8b5gVjHh6TWnyYzHVilMvGI",
    "Content-Type": "application/json",
    
    }   
    })
    const data = await res.json()
    fetchTab()
}
catch(e){
    console.log(e)
} 
}

 fetchProductById(id)
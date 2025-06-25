async function fetchProdotti() {
    
    const res = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method : "GET",
     headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViY2Q4MDk2OGRlNTAwMTU1MmEzZWYiLCJpYXQiOjE3NTA4NDc3NjIsImV4cCI6MTc1MjA1NzM2Mn0.n5Cv3h7wVlVq9mmf518h8b5gVjHh6TWnyYzHVilMvGI",
}   
    })
    const data = await res.json()
    console.log (data)
}
fetchProdotti()
const brand = document.getElementById('brand')
const namy = document.getElementById('name')
const year = document.getElementById('year')
const price = document.getElementById('price')
const desc = document.getElementById('desc')
const img = document.getElementById('img')
const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', function() {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "image": img.value,
            "brand": brand.value,
            "name": namy.value,
            "year": parseInt(year.value),
            "desc": desc.value,
            "price": parseFloat(price.value)
        })
    }
    if(brand.value === '' || namy.value === '' || year.value === '' || price.value === '' || desc.value === '' || img.value === '') {
        return alert('Preencha todos os dados')
    }
    fetch("http://localhost:3000/cars", requestOptions)
    .then(r => r.json())
    .then(data => data)
})



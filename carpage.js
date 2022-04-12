const stryngParams = window.location.search
const paramsSyarch = new URLSearchParams(stryngParams)

const carSlug = paramsSyarch.get('id')

const price = document.querySelector('#price')
const image = document.querySelector('#image')
const year = document.querySelector('#year')
const desc = document.querySelector('#desc')
const brand = document.querySelector('#brand')
const nameCar = document.querySelector('#nameCar')

fetch(`http://localhost:3000/cars/${carSlug}`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
  .then((r) => r.json())
  .then((res) => {
    console.log(res)
    price.innerHTML = res.price.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
    image.src = res.image
    year.innerHTML = res.year
    desc.innerHTML = res.desc
    nameCar.innerHTML = res.year
    brand.innerHTML = `${res.brand} <span id="nameCar" class="text-red-600">${res.name}</span>`
  })

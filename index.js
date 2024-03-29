const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;

const stringParams = window.location.search
const paramsSearch = new URLSearchParams(stringParams)

const brandSelected = paramsSearch.get('brand') || 'Todos os carros'

const quantity = document.querySelector('#quantity')
const brandSpan = document.querySelector('#brandSpan')

const carsCards = document.getElementById('carsCards')
let cars = []

function cardGenerator(car) {
  let priceCurrency = car.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  let carBrand = car.brand.toUpperCase()
  let carName = car.name.toUpperCase()
  let carDesc = car.desc.toUpperCase()
  return (carsCards.innerHTML += `
    <div class="bg-white shadow-md rounded flex flex-col justify-center">
                <div class="rounded-t w-full h-40 bg-center bg-origin-padding bg-cover" style="background-image: url('${car.image}')"></div>
                <div class="p-2">
                    <h2 class="font-medium">${carBrand} ${carName}</h2>
                    <p class="pb-10 font-medium text-sm text-slate-500">${carDesc}</p>
                </div>
                <div class="flex-shrink-0 mt-auto">
                    <span class="font-medium text-2xl p-2">${priceCurrency}</span>
                    <p class="text-slate-500 text-sm pt-2 p-2">${car.year}</p>
                    <button
                        class="bg-red-600 p-3 rounded-b w-full text-white font-bold hover:bg-red-700 transition" onclick="buyCar(${car.id})">COMPRAR
                    </button>
                </div>
            </div>
    `)
}

function buyCar(id) {
  window.location.href = `/car/?id=${id}`
}

function updateCars() {
  carsCards.innerHTML = ''
  cars.forEach((car) => cardGenerator(car))
}

const brandeURLAPI = paramsSearch.has('brand')
  ? `http://localhost:3000/cars?q=${brandSelected}`
  : `http://localhost:3000/cars`

function search(el) {
  if (event.key == 'Enter') {
    fetch(`${brandeURLAPI}?q=${el.value}`)
      .then((r) => r.json())
      .then((res) => {
        quantity.innerHTML = res.length
        brandSpan.innerHTML = brandSelected
        cars = res
        updateCars()
      })
  }
}

fetch(brandeURLAPI)
  .then((r) => r.json())
  .then((res) => {
    quantity.innerHTML = res.length
    brandSpan.innerHTML = brandSelected
    cars = res
    updateCars()
  })

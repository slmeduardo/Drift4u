const carsCards = document.getElementById('carsCards')
let cars = []


function cardGenerator(car) {
    let priceCurrency = car.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return carsCards.innerHTML += `
    <div class="bg-white shadow-md rounded flex flex-col justify-center">
                <img class="rounded-t w-full" src="${car.image}">
                <div class="p-2">
                    <h2 class="font-medium">${car.brand} ${car.name}</h2>
                    <p class="pb-10 font-medium text-sm text-slate-500">${car.desc}</p>
                </div>
                <div class="flex-shrink-0 mt-auto">
                    <span class="font-medium text-2xl p-2">${priceCurrency}</span>
                    <p class="text-slate-500 text-sm pt-2 p-2">${car.year}</p>
                    <button
                        class="bg-red-600 p-3 rounded-b w-full text-white font-bold hover:bg-red-700 transition">COMPRAR
                    </button>
                </div>
            </div>
    `
}

function updateCars() {
    cars.forEach(car => cardGenerator(car))
}

const carsList = fetch("http://localhost:3000/cars")
carsList
.then(r => r.json())
.then(res => {
    cars = res
    updateCars()
})
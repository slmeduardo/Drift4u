const categoriesBox = document.querySelector('#categoriesBox')

fetch('http://localhost:3000/categories', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
  .then((r) => r.json())
  .then((data) => {
    data.forEach((brand) => {
      categoriesBox.innerHTML += `
      <button onclick="redirectBrand('${brand.name}')" class="w-full bg-white rounded border-2 border-red-600 font-medium text-red-600 outline-none py-2 px-3 my-2 hover:bg-red-600 hover:text-white transition" type="text">${brand.name}</button>`
    })
  })

function redirectBrand(search) {
  window.location.href = `/index.html?brand=${search}`
}

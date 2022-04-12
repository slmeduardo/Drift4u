const exitButton = document.querySelector('#exitButton')
const modal = document.querySelector('#modal')
const body = document.querySelector('body')
let idCar

function cardEdit() {
  console.log('teste')
  //pegar os input
  const modalBrand = document.getElementById('modalBrand')
  const modalName = document.getElementById('modalName')
  const modalYear = document.getElementById('modalYear')
  const modalPrice = document.getElementById('modalPrice')
  const modalDesc = document.getElementById('modalDesc')
  const modalImg = document.getElementById('modalImg')
  //manda um put pra api la doida
  fetch(`http://localhost:3000/cars/${idCar}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      image: modalImg.value,
      brand: modalBrand.value,
      name: modalName.value,
      year: parseInt(modalYear.value),
      desc: modalDesc.value,
      price: parseFloat(modalPrice.value)
    })
  })
}

function openModal(id) {
  idCar = id
  //limpar input
  //pegar dados do carro pelo id (api)
  const modalBrand = document.getElementById('modalBrand')
  const modalName = document.getElementById('modalName')
  const modalYear = document.getElementById('modalYear')
  const modalPrice = document.getElementById('modalPrice')
  const modalDesc = document.getElementById('modalDesc')
  const modalImg = document.getElementById('modalImg')
  fetch(`http://localhost:3000/cars/${id}`, { method: 'GET' })
    .then((r) => r.json())
    .then((data) => {
      ;(modalBrand.value = data.brand),
        (modalName.value = data.name),
        (modalYear.value = data.year),
        (modalPrice.value = data.price),
        (modalDesc.value = data.desc),
        (modalImg.value = data.image)
    })

  //setar os dados nos input
  window.scroll(0, 0)
  body.classList.add('overflow-hidden')
  modal.classList.remove('hidden')
}

exitButton.addEventListener('click', function () {
  body.classList.remove('overflow-hidden')
  modal.classList.add('hidden')
})

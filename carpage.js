function buyCar(slug) {
  window.location.href = `/carpage.html?buycar=${slug}`
}

const stryngParams = window.location.search
const paramsSyarch = new URLSearchParams(stryngParams)

const carSlug = paramsSyarch.get('buycar')

console.log(carSlug)

fetch(`http://localhost:3000/cars`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
  .then((r) => r.json())
  .then((res) => {
    console.log(res)
  })

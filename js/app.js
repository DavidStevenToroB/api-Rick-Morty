const url = 'https://rickandmortyapi.com/api/character'
const input = document.getElementById('search')

input.addEventListener('input', search)

const getCharacter = async (URL) => {
    const response = await fetch(URL)
    const data  = await response.json()
    
    cards(data)
}

function cards(data) {
    data.results.forEach(character => {makeCard(character)})    
}

function makeCard(card) {
    let div = document.createElement('div')
    div.id = 'cointainer'
    div.classList.add('card')
    
    let imgCard = document.createElement('img')
    imgCard.src = card.image
    imgCard.alt = card.name
    imgCard.id = 'img-container'

    let asideConteiner = document.createElement('aside')
    asideConteiner.classList.add('aside-container')

    let h2 = document.createElement('h2')
    h2.textContent = card.name
    h2.id = 'name-container'

    let asideMedium = document.createElement('aside')

    let h3Status = document.createElement('h3')
    h3Status.textContent = aliveDead(card)
    h3Status.id = 'status-container'
    
    let p = document.createElement('p')
    p.textContent = ' - ' 

    let h3Specie = document.createElement('h3')
    h3Specie.textContent = card.species
    h3Specie.id = 'species-container'

    let labelFirst = document.createElement('label')
    labelFirst.textContent = 'Last known location:'

    let h3First = document.createElement('h3')
    h3First.textContent = card.origin.name

    let labelSecond = document.createElement('label')
    labelSecond.textContent = 'First seen in:'

    let h3Second = document.createElement('h3')
    h3Second.textContent = card.location.name

    div.appendChild(imgCard)
    div.appendChild(asideConteiner)
    asideConteiner.appendChild(h2)
    asideConteiner.appendChild(asideMedium)
    asideMedium.appendChild(h3Status)
    asideMedium.appendChild(p)
    asideMedium.appendChild(h3Specie)
    asideConteiner.appendChild(labelFirst)
    asideConteiner.appendChild(h3First)
    asideConteiner.appendChild(labelSecond)
    asideConteiner.appendChild(h3Second)

    document.querySelector('main').appendChild(div)

}

function aliveDead(card) {
    let result
    switch (card.status) {
        case 'Alive':
            result = `🟢${card.status}`
            break;
        case 'Dead':
            result = `🔴${card.status}`
            break;
        default:
            result = `⚪${card.status}`
            break;
    }
    return result 
}



window.addEventListener('DOMContentLoaded', getCharacter(url))

// investigar para que sirve el bloque del trycatch, separar todo por una sola funcion, buscador de personajes 
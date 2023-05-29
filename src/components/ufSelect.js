const stateSelect = document.querySelector('#state-select')
const citySelect = document.querySelector('#city-select')

const appendOption = (array, selection) => {
    array.forEach( item => {
        let option = document.createElement('option')
        option.setAttribute('value', item.id)
        option.text = selection === stateSelect ? item.sigla : item.nome
        selection.appendChild(option)
    })
}

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
.then(res => res.json())
.then(json => appendOption(json, stateSelect))

const fetchCities = UF => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
    .then(res => res.json())
    .then(json => appendOption(json, citySelect))
}

stateSelect.addEventListener('change', () => fetchCities(stateSelect.value))
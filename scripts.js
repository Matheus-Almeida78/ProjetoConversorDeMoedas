const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000092

const convertvalue = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if ( select.value === "US$ Dólar Americano") {

        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if ( select.value === "€ Euro") {

        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if ( select.value === "Bitcoin") {

        currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR" , {
            style: "currency",
            currency: "BTC"
        }).format(inputReais * bitcoin)
    }

}

changeCurrency = () => {

    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "././assets/eua.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === 'Bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    convertvalue()
}
button.addEventListener("click", convertvalue)
select.addEventListener("change", changeCurrency)
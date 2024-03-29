const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currendy").value
  const convertValuetoconvert = document.querySelector(".corrency-value-to-convert")
  const convertValuetoconverted = document.querySelector(".corrency-value")

  const dolarToday = 5.2
  const euroToday = 6.2


  if (currencySelect.value == "Dolar") {
    convertValuetoconverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
  }
  if (currencySelect.value == "Euro") {
    convertValuetoconverted.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }
  convertValuetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency", currency: "BRL"
  }).format(inputCurrencyValue)
}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")
  if (currencySelect.value == "Dolar") {
    currencyName.innerHTML = "Dolar americano"
    currencyImage.src = "./assets/estados-unidos (1) 1.png"
  }

  if (currencySelect.value == "Euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }
  convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
import axios from 'axios'

// https://api.currencyapi.com/v3/latest?apikey=0jJsW68dtEvK68ZkGbbW2BpCN5nID7E18lhtW4rE&base_currency=GBP&currencies=EUR
/* Exemple de réponse :
    {
        meta: {
        last_updated_at: "2022-03-28T23:59:59Z"
        },
        data: {
        EUR: {
        code: "EUR",
        value: 1.191892
        }
    }
}
*/
const API_URL = 'https://api.currencyapi.com/v3/latest'
const API_KEY = '0jJsW68dtEvK68ZkGbbW2BpCN5nID7E18lhtW4rE'

const exchangeMoney = async (amount, baseCurrency, targetCurrency) => {
    const response = await axios.get(`${API_URL}?apikey=${API_KEY}&base_currency=${baseCurrency}&currencies=${targetCurrency}`)
    let exchange = response.data
    let result = amount * exchange.data[targetCurrency].value.toFixed(2)
    return result
}

export default exchangeMoney
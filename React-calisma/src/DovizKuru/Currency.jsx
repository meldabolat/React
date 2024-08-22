import { useState } from 'react';
import '../App.css'
import './Currency.css'
import { GoArrowRight } from "react-icons/go";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API = "fca_live_UbSnF2FSUyThjLjQOHuWI4W7t3tPM2pgRZIM3p8L";

function Currency() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState('');

    const exchange = async () => {
        try {
            const response = await axios.get(`${BASE_URL}?apikey=${API}&base_currency=${fromCurrency}`);
            setResult(((response.data.data[toCurrency]) * amount).toFixed(2));
        } catch (error) {
            console.error("Error fetching exchange rate:", error);
        }
    };

    return (
        <div className='currency-div'>
            <div style={{ marginTop: '-20px', fontFamily: 'arial', backgroundColor: 'black', color: '#fff', width: '100%', textAlign: 'center' }}>
                <h3>DÖVİZ KURU</h3>
            </div>
            <div style={{ marginTop: '25px' }}>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    className='amount'
                    placeholder="Miktar girin"
                />
                <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>
                <GoArrowRight style={{ fontSize: '25px', marginRight: '10px', marginTop: '5px' }} />
                <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency'>
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <input
                    value={result}
                    readOnly
                    type="text"
                    className='result'
                    placeholder="Sonuç"
                />
            </div>
            <div>
                <button
                    onClick={exchange}
                    className='exchange-button'>Çevir</button>
            </div>
        </div>
    );
}

export default Currency;

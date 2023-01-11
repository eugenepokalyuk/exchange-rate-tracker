import React, { useState, useEffect } from "react";
import axios from "axios";
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'

const ExchangeRateTracker = () => {
    const [currencyRatesUSD, setCurrencyRatesUSD] = useState({});
    useEffect(() => {
        axios
            .get("https://api.exchangerate.host/latest?base=USD")
            .then(res => setCurrencyRatesUSD(res.data.rates));
    }, []);

    const [currencyRatesEUR, setCurrencyRatesEUR] = useState({});
    useEffect(() => {
        axios
            .get("https://api.exchangerate.host/latest?base=EUR")
            .then(res => setCurrencyRatesEUR(res.data.rates));
    }, []);

    const [currencyRatesKZT, setCurrencyRatesKZT] = useState({});
    useEffect(() => {
        axios
            .get("https://api.exchangerate.host/latest?base=KZT")
            .then(res => setCurrencyRatesKZT(res.data.rates));
    }, []);

    const [currencyRatesRUB, setCurrencyRatesRUB] = useState({});
    useEffect(() => {
        axios
            .get("https://api.exchangerate.host/latest?base=RUB")
            .then(res => setCurrencyRatesRUB(res.data.rates));
    }, []);

    return (
        <>
            <div className="uk-container uk-text-center uk-margin-large-top">
                <h1>Exchange Rate Tracker</h1>
                <p>You can drag and drop an element to a new location within the sortable grid</p>
                <ul className="uk-grid-collapse uk-child-width-1-2@s uk-text-center" data-uk-sortable="handle: .uk-card" data-uk-grid>
                    <li>
                        <div className="uk-card uk-text-center">
                            <div>
                                <div className="uk-padding uk-light">
                                    <h2>USD</h2>
                                    <div>
                                        <p>USD to EUR: {currencyRatesUSD.EUR}</p>
                                        <p>USD to KZT: {currencyRatesUSD.KZT}</p>
                                        <p>USD to RUB: {currencyRatesUSD.RUB}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-text-center">
                            <div>
                                <div className="uk-padding uk-light">
                                    <h2>EUR</h2>
                                    <div>
                                        <p>EUR to USD: {currencyRatesEUR.USD}</p>
                                        <p>EUR to KZT: {currencyRatesEUR.KZT}</p>
                                        <p>EUR to RUB: {currencyRatesEUR.RUB}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-text-center">
                            <div>
                                <div className="uk-padding uk-light">
                                    <h2>KZT</h2>
                                    <div>
                                        <p>KZT to USD: {currencyRatesKZT.USD}</p>
                                        <p>KZT to EUR: {currencyRatesKZT.EUR}</p>
                                        <p>KZT to RUB: {currencyRatesKZT.RUB}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-text-center">
                            <div>
                                <div className="uk-padding uk-light">
                                    <h2>RUB</h2>
                                    <div>
                                        <p>RUB to USD: {currencyRatesRUB.USD}</p>
                                        <p>RUB to EUR: {currencyRatesRUB.EUR}</p>
                                        <p>RUB to KZT: {currencyRatesRUB.KZT}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ExchangeRateTracker;
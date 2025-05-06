import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'e0c0e26a57a4e70dad32d200';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

export const ExchangeRate = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [rates, setRates] = useState({});
    const [converted, setConverted] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRates = async () => {
            try {
                setLoading(true);
                const res = await axios.get(BASE_URL);
                setRates(res.data.conversion_rates);
                setError('');
            } catch (err) {
                console.error('Error fetching exchange rates:', err);
                setError('Failed to load exchange rates.');
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, []);

    useEffect(() => {
        if (rates[fromCurrency] && rates[toCurrency]) {
            const usdAmount = amount / rates[fromCurrency];
            const result = usdAmount * rates[toCurrency];
            setConverted(result.toFixed(4));
        }
    }, [amount, fromCurrency, toCurrency, rates]);

    const top10Rates = Object.entries(rates)
        .slice(0, 10)
        .map(([currency, rate]) => {
            const converted = ((amount / rates[fromCurrency]) * rate).toFixed(4);
            return { currency, converted };
        });

    return (
        <div className="bg-gradient-to-br from-[#ebf8ff] via-[#dbeafe] to-[#bfdbfe] mt-16
dark:bg-gradient-to-r dark:from-gray-600 dark:via-gray-400 dark:to-gray-600 transition duration-300 ">

            <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100 ">
                <div className="bg-white dark:bg-gray-600 shadow-xl rounded-2xl p-6 mb-10">
                    <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
                        Live Currency Converter
                    </h2>

                    {loading ? (
                        <div className="flex justify-center my-10">
                            <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                                    className="p-3 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Amount"
                                />

                                <select
                                    value={fromCurrency}
                                    onChange={(e) => setFromCurrency(e.target.value)}
                                    className="p-3 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900"
                                >
                                    {Object.keys(rates).map((cur) => (
                                        <option key={cur} value={cur}>{cur}</option>
                                    ))}
                                </select>

                                <select
                                    value={toCurrency}
                                    onChange={(e) => setToCurrency(e.target.value)}
                                    className="p-3 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 "
                                >
                                    {Object.keys(rates).map((cur) => (
                                        <option key={cur} value={cur}>{cur}</option>
                                    ))}
                                </select>
                            </div>

                            {error ? (
                                <p className="text-center text-red-600 font-medium">{error}</p>
                            ) : (
                                <p className="text-center text-xl font-semibold">
                                    {amount} {fromCurrency} ={' '}
                                    <span className="text-green-600 dark:text-green-300 font-bold">
                                        {converted} {toCurrency}
                                    </span>
                                </p>
                            )}
                        </>
                    )}
                </div>

                {/* Separate Section for Live Top 10 Rates */}
                <div className="bg-white dark:bg-gray-700 shadow-md rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
                        Top 10 Live Exchange Rates from {fromCurrency}
                    </h3>
                    <div className="overflow-x-auto max-h-[50vh]">
                        <table className="min-w-full text-sm border dark:border-gray-700 rounded-lg overflow-hidden">
                            <thead className="bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100">
                                <tr>
                                    <th className="p-3 text-left">Currency Code</th>
                                    <th className="p-3 text-right">Exchange Rate</th>
                                    <th className="p-3 text-right">Converted Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {top10Rates.map(({ currency, converted }) => (
                                    <tr
                                        key={currency}
                                        className="border-t dark:border-gray-700 even:bg-gray-50 dark:even:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                        <td className="p-3">{currency}</td>
                                        <td className="p-3 text-right">{rates[currency]?.toFixed(4)}</td>
                                        <td className="p-3 text-right">{converted}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

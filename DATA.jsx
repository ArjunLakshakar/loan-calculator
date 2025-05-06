import React, { useState } from 'react';
import {
    HiCurrencyDollar,
    HiOutlineCalendar,
    HiOutlineCalculator,
} from 'react-icons/hi';
import { MdOutlineFileDownload } from 'react-icons/md';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

export const Dashboard = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [termYears, setTermYears] = useState('');
    const [emi, setEmi] = useState(null);
    const [currency, setCurrency] = useState('USD');
    const [schedule, setSchedule] = useState([]);
    const [error, setError] = useState('');

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(parseFloat(value));
    };

    const calculateEMI = () => {
        const principal = parseFloat(loanAmount);
        const rate = parseFloat(interestRate) / 100 / 12;
        const time = parseFloat(termYears) * 12;

        if (!principal || !rate || !time) {
            setError('Please fill all fields with valid numbers');
            return;
        }

        const monthlyEMI =
            (principal * rate * Math.pow(1 + rate, time)) /
            (Math.pow(1 + rate, time) - 1);

        setEmi(monthlyEMI.toFixed(2));

        let balance = principal;
        const tempSchedule = [];

        for (let month = 1; month <= time; month++) {
            const interest = balance * rate;
            const principalPaid = monthlyEMI - interest;
            balance -= principalPaid;

            tempSchedule.push({
                month,
                principal: principalPaid.toFixed(2),
                interest: interest.toFixed(2),
                balance: balance > 0 ? balance.toFixed(2) : '0.00',
            });
        }

        setSchedule(tempSchedule);
        setError('');
    };

    const reset = () => {
        setLoanAmount('');
        setInterestRate('');
        setTermYears('');
        setEmi(null);
        setSchedule([]);
        setError('');
    };

    const downloadCSV = () => {
        const headers = ['Month,Principal,Interest,Remaining Balance'];
        const rows = schedule.map(s => `${s.month},${s.principal},${s.interest},${s.balance}`);
        const csv = [headers, ...rows].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'loan_schedule.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-gradient-to-br from-[#ebf8ff] via-[#dbeafe] to-[#bfdbfe] min-h-screen dark:bg-gradient-to-r dark:from-gray-500 dark:via-gray-200 dark:to-gray-100 transition duration-300">
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Welcome Section */}
                <section className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-blue-800 mb-2">Welcome to Your Smart Loan Planner</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                        Quickly visualize your EMI, interest outflow, and repayment journey. No sign-up required. Get started below!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <div>
                            <HiCurrencyDollar className="mx-auto text-blue-600 text-3xl mb-2" />
                            <p>Real-time EMI Calculation</p>
                        </div>
                        <div>
                            <HiOutlineCalendar className="mx-auto text-blue-600 text-3xl mb-2" />
                            <p>Repayment Schedule</p>
                        </div>
                        <div>
                            <MdOutlineFileDownload className="mx-auto text-blue-600 text-3xl mb-2" />
                            <p>CSV Export Support</p>
                        </div>
                    </div>
                </section>

                <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-white mb-6">
                    Loan Calculator Dashboard
                </h2>

                <div className="bg-white shadow-md rounded-xl p-6 mb-6 dark:bg-slate-500">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-blue-500">
                                <HiCurrencyDollar />
                            </span>
                            <input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                                className="p-3 pl-10 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Loan Amount"
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-blue-500">
                                <HiOutlineCalculator />
                            </span>
                            <input
                                type="number"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                                className="p-3 pl-10 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Interest Rate (%)"
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-3 text-blue-500">
                                <HiOutlineCalendar />
                            </span>
                            <input
                                type="number"
                                value={termYears}
                                onChange={(e) => setTermYears(e.target.value)}
                                className="p-3 pl-10 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Term (Years)"
                            />
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <button
                            onClick={calculateEMI}
                            className="bg-blue-600 dark:bg-slate-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            CALCULATE
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="p-2 border rounded-md"
                    >
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                    </select>

                    <div className="flex gap-2">
                        <button
                            onClick={reset}
                            className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            RESET
                        </button>
                        <button
                            onClick={downloadCSV}
                            className="flex items-center gap-1 border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            <MdOutlineFileDownload className="text-xl" />
                            EXPORT CSV
                        </button>
                    </div>
                </div>

                {error && (
                    <p className="text-red-600 text-center font-medium mb-4">{error}</p>
                )}

                {emi && (
                    <>
                        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded-md">
                            <p className="text-lg font-semibold text-center">
                                Monthly EMI: {formatCurrency(emi)}
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 bg-white p-4 rounded shadow">
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={schedule}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="principal" stroke="#8884d8" name="Principal" />
                                        <Line type="monotone" dataKey="interest" stroke="#82ca9d" name="Interest" />
                                        <Line type="monotone" dataKey="balance" stroke="#ff7300" name="Balance" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="flex-1 overflow-x-auto max-h-[60vh] border rounded-md shadow-sm">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-gray-100 sticky top-0">
                                        <tr>
                                            <th className="text-left p-2">Month</th>
                                            <th className="text-right p-2">Principal</th>
                                            <th className="text-right p-2">Interest</th>
                                            <th className="text-right p-2">Remaining Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schedule.map((item, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="p-2">{item.month}</td>
                                                <td className="text-right p-2">{formatCurrency(item.principal)}</td>
                                                <td className="text-right p-2">{formatCurrency(item.interest)}</td>
                                                <td className="text-right p-2">{formatCurrency(item.balance)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="p-2 border rounded-md mr-4"
                            >
                                <option value="USD">USD</option>
                                <option value="INR">INR</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="JPY">JPY</option>
                            </select>

                            <button
                                onClick={reset}
                                className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                            >
                                RESET TABLE
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};  
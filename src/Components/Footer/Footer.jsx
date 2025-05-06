import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition duration-300">
            <div className="px-6 py-8 flex flex-col md:flex-row md:justify-around gap-8">

                <div className="max-w-xl">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">About</h3>
                    <p className="text-sm w-full">
                        This platform provides real-time currency conversion powered by ExchangeRate API, designed to be fast, simple, and reliable. Whether you're planning a trip, managing international finances, or just curious about exchange rates, our intuitive interface makes it easy to convert currencies with confidence.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">Links</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/exchange-rate" className="hover:underline">Exchange Rate</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">Connect</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="hover:underline">GitHub</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center py-4 border-t border-gray-300 dark:border-gray-700 text-sm">
                © {new Date().getFullYear()} Loan Calculator. All rights reserved.
            </div>
        </footer>
    );
};

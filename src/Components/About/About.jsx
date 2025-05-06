import React from 'react';

export const About = () => {
    return (
        <div className="mt-16 bg-gradient-to-br from-[#ebf8ff] via-[#dbeafe] to-[#bfdbfe]
dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl font-extrabold dark:text-gray-50 text-blue-800 mb-6">About Us</h1>
                <p className="text-lg dark:text-gray-200 max-w-3xl mx-auto mb-10">
                    Welcome to our currency and loan planning platform — where real-time accuracy meets simplicity.
                    Our mission is to provide fast, reliable, and user-friendly tools for currency conversion and loan planning with live data insights.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold dark:text-gray-600  text-blue-600 mb-2">Real-Time Data</h3>
                        <p>We fetch live currency and interest rates, ensuring you're always working with the latest and most accurate figures.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold dark:text-gray-600 text-blue-600 mb-2">Simple UI</h3>
                        <p>Our modern, intuitive design helps users calculate EMIs and compare currencies effortlessly with no learning curve.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold dark:text-gray-600 text-blue-600 mb-2">Open & Transparent</h3>
                        <p>Built on open standards and APIs, we ensure fair, transparent access to data — no hidden costs or tricks.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold dark:text-gray-600 text-blue-600 mb-2">Why Choose Us?</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Live currency exchange and conversion tools.</li>
                            <li>Loan EMI planning with detailed repayment schedules.</li>
                            <li>Downloadable CSV reports for personal use.</li>
                            <li>Responsive design for mobile and desktop users.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold dark:text-gray-600 text-blue-600 mb-2">Our Vision</h3>
                        <p className="text-gray-700">
                            We envision a world where financial tools are freely available, accessible to everyone,
                            and built with user-first principles. We're here to empower individuals and small businesses with clarity and control over their finances.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-lg font-medium text-gray-800 mb-4">Ready to explore?</p>
                    <a
                        href="/"
                        className="inline-block dark:bg-gray-500 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                    >
                        Go to Home
                    </a>
                </div>
            </div>
        </div>
    );
};


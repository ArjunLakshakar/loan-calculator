import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="mt-16 flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-r from-red-100 via-pink-100 to-yellow-100 text-gray-800 px-4
        dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-600 dark:to-gray-700">
            <AlertTriangle size={64} className="text-red-600  dark:text-blue-500 mb-4" />
            <h1 className="text-4xl font-bold mb-2 dark:text-white">Oops! Page Not Found</h1>
            <p className="mb-6 text-center text-lg dark:text-gray-400">The page you're looking for doesn't exist or an error occurred.</p>
            <button
                onClick={() => navigate('/')}
                className="bg-blue-600 dark:bg-gray-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
            >
                Go to Home
            </button>
        </div>
    );
};



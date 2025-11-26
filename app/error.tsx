'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#004efb] to-[#0038cc] p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 rounded-full p-4">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h2>
        
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        
        {error.digest && (
          <p className="text-sm text-gray-500 mb-6">
            Error ID: {error.digest}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="bg-[#004efb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0038cc] transition-colors"
          >
            Try Again
          </motion.button>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Go Home
          </motion.a>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          If this problem persists, please{' '}
          <a href="/contact" className="text-[#004efb] hover:underline">
            contact us
          </a>
        </p>
      </motion.div>
    </div>
  );
}

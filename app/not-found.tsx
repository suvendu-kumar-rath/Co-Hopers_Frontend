'use client';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#004efb] to-[#0038cc] p-4">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl mb-8 text-blue-100">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-[#00ffe0] text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-[#00d4c4] transition-colors"
          >
            Go Home
          </a>
          <a
            href="/contact"
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

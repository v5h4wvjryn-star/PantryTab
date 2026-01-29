import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.png" alt="Pantry Tab" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-green-brand transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-green-brand transition-colors font-medium">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-green-brand transition-colors font-medium">Pricing</a>
            <a
              href="#get-started"
              className="bg-orange-brand hover:bg-orange-dark text-white px-5 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started Free
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-3">
          <a href="#features" className="block py-2 text-gray-600 hover:text-green-brand font-medium" onClick={() => setOpen(false)}>Features</a>
          <a href="#how-it-works" className="block py-2 text-gray-600 hover:text-green-brand font-medium" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#pricing" className="block py-2 text-gray-600 hover:text-green-brand font-medium" onClick={() => setOpen(false)}>Pricing</a>
          <a
            href="#get-started"
            className="block bg-orange-brand hover:bg-orange-dark text-white text-center px-5 py-2.5 rounded-lg font-semibold transition-colors"
            onClick={() => setOpen(false)}
          >
            Get Started Free
          </a>
        </div>
      )}
    </nav>
  );
}

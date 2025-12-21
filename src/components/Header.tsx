import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-neutral-light/95 backdrop-blur-sm z-50 border-b border-secondary">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center transition-transform hover:scale-105">
              <img 
                src="/precisionwellnesslogo.png" 
                alt="Precision Wellness" 
                className="h-12 sm:h-16 md:h-20 w-auto max-h-full"
                style={{ imageRendering: 'auto' }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-dark hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="text-neutral-dark hover:text-primary transition-colors">Products</Link>
            <Link to="/pricing" className="text-neutral-dark hover:text-primary transition-colors">Pricing</Link>
            <Link to="/certificates" className="text-neutral-dark hover:text-primary transition-colors">Certificates</Link>
            <Link to="/privacy" className="text-neutral-dark hover:text-primary transition-colors">Privacy</Link>
            <a href="tel:985-999-4667" className="flex items-center gap-2 text-neutral-dark hover:text-primary transition-colors">
              <Phone size={16} />
              985-999-4667
            </a>
            <a href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-accent transition-all flex items-center gap-2 shadow-lg hover:shadow-accent/40">
              Get in touch
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-neutral-dark hover:text-primary transition-colors">Home</Link>
              <Link to="/products" className="text-neutral-dark hover:text-primary transition-colors">Products</Link>
              <Link to="/pricing" className="text-neutral-dark hover:text-primary transition-colors">Pricing</Link>
              <Link to="/certificates" className="text-neutral-dark hover:text-primary transition-colors">Certificates</Link>
              <Link to="/privacy" className="text-neutral-dark hover:text-primary transition-colors">Privacy</Link>
              <a href="tel:985-999-4667" className="flex items-center gap-2 text-neutral-dark hover:text-primary transition-colors">
                <Phone size={16} />
                985-999-4667
              </a>
              <a href="mailto:info@precisionpep.com" className="flex items-center gap-2 text-neutral-dark hover:text-primary transition-colors">
                <Mail size={16} />
                info@precisionpep.com
              </a>
              <a href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-accent transition-all w-full flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/40">
                Get in touch
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

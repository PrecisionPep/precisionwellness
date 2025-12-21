import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/paths';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-neutral-light/95 backdrop-blur-sm z-50 border-b border-secondary" style={{ paddingTop: 'max(env(safe-area-inset-top), 0px)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center flex-1">
              <Link to="/" className="flex items-center transition-transform active:scale-95" onClick={handleLinkClick}>
                <img 
                  src={getAssetPath('precisionwellnesslogo.png')}
                  alt="Precision Wellness" 
                  className="h-12 sm:h-16 md:h-20 w-auto max-h-full"
                  style={{ imageRendering: 'auto' }}
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-neutral-dark hover:text-primary transition-colors py-2">Home</Link>
              <Link to="/products" className="text-neutral-dark hover:text-primary transition-colors py-2">Products</Link>
              <Link to="/pricing" className="text-neutral-dark hover:text-primary transition-colors py-2">Pricing</Link>
              <Link to="/certificates" className="text-neutral-dark hover:text-primary transition-colors py-2">Certificates</Link>
              <Link to="/privacy" className="text-neutral-dark hover:text-primary transition-colors py-2">Privacy</Link>
              <a href="tel:985-999-4667" className="flex items-center gap-2 text-neutral-dark hover:text-primary transition-colors py-2">
                <Phone size={16} />
                985-999-4667
              </a>
              <a href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login" className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-accent transition-all flex items-center gap-2 shadow-lg hover:shadow-accent/40 min-h-[44px]">
                Get in touch
                <ArrowRight size={16} />
              </a>
            </div>

            <button
              type="button"
              className="md:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation relative z-50"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} className="text-neutral-dark" /> : <Menu size={28} className="text-neutral-dark" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-secondary bg-neutral-light">
              <div className="flex flex-col space-y-1">
                <Link 
                  to="/" 
                  className="text-neutral-dark active:text-primary active:bg-neutral-100 transition-colors py-3 px-4 text-base font-medium min-h-[44px] flex items-center rounded-lg"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className="text-neutral-dark active:text-primary active:bg-neutral-100 transition-colors py-3 px-4 text-base font-medium min-h-[44px] flex items-center rounded-lg"
                  onClick={handleLinkClick}
                >
                  Products
                </Link>
                <Link 
                  to="/pricing" 
                  className="text-neutral-dark active:text-primary active:bg-neutral-100 transition-colors py-3 px-4 text-base font-medium min-h-[44px] flex items-center rounded-lg"
                  onClick={handleLinkClick}
                >
                  Pricing
                </Link>
                <Link 
                  to="/certificates" 
                  className="text-neutral-dark active:text-primary active:bg-neutral-100 transition-colors py-3 px-4 text-base font-medium min-h-[44px] flex items-center rounded-lg"
                  onClick={handleLinkClick}
                >
                  Certificates
                </Link>
                <Link 
                  to="/privacy" 
                  className="text-neutral-dark active:text-primary active:bg-neutral-100 transition-colors py-3 px-4 text-base font-medium min-h-[44px] flex items-center rounded-lg"
                  onClick={handleLinkClick}
                >
                  Privacy
                </Link>
                <a 
                  href="tel:985-999-4667" 
                  className="flex items-center gap-2 text-neutral-dark active:text-primary active:bg-neutral-100 transition-colors py-3 px-4 text-base font-medium min-h-[44px] rounded-lg"
                  onClick={handleLinkClick}
                >
                  <Phone size={20} />
                  985-999-4667
                </a>
                <a 
                  href="mailto:info@precisionpep.com" 
                  className="flex items-center gap-2 text-neutral-dark active:text-primary active:bg-neutral-100 transition-colors py-3 px-4 text-base font-medium min-h-[44px] rounded-lg"
                  onClick={handleLinkClick}
                >
                  <Mail size={20} />
                  info@precisionpep.com
                </a>
                <a 
                  href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login" 
                  className="bg-primary text-white px-6 py-3.5 rounded-lg active:bg-accent transition-all w-full flex items-center justify-center gap-2 shadow-lg active:shadow-accent/40 min-h-[44px] text-base font-semibold mt-2"
                  onClick={handleLinkClick}
                >
                  Get in touch
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
      
      {/* Backdrop overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={handleMenuToggle}
          aria-hidden="true"
        />
      )}
    </>
  );
}

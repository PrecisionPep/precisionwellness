import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-neutral-light border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12 items-start">
          <div>
            <Link to="/" className="inline-block transition-transform hover:scale-110">
              <img 
                src="/precisionwellnesslogo.png" 
                alt="Precision Wellness" 
                className="h-28 w-auto mb-6"
                style={{ imageRendering: 'auto' }}
              />
            </Link>
            <p className="text-neutral-dark/80 leading-relaxed mb-6">
              Monthly wellness tips, exclusive offers, and complimentary sample invites.
            </p>
            <div className="flex items-center gap-2 bg-white border border-secondary rounded-lg">
              <Mail className="ml-3 text-primary" size={20} />
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 outline-none text-neutral-dark"
              />
              <button className="bg-primary text-white px-4 py-2 hover:bg-accent transition-all flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-dark mb-4">Our Blends</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-dark/80 hover:text-primary transition-colors">FIT Citrus Refresher</a></li>
              <li><a href="#" className="text-neutral-dark/80 hover:text-primary transition-colors">ENERGIZE Blue Raspberry</a></li>
              <li><a href="#" className="text-neutral-dark/80 hover:text-primary transition-colors">HYDRATE Tropical Refresher</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-dark mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-dark/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-neutral-dark/80 hover:text-primary transition-colors">Client Stories</a></li>
              <li><Link to="/pricing" className="text-neutral-dark/80 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-dark mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-dark/80 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-neutral-dark/80 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-neutral-dark/80 hover:text-primary transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-neutral-dark/80">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>

            <p className="text-sm text-neutral-dark/80">
              Precision Wellness© 2025 Precision Wellness. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

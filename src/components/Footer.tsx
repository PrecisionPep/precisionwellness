import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Submit to Netlify Forms
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'newsletter',
        'email': email,
      }).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setEmail('');
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <footer className="bg-neutral-light border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12 items-start">
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block transition-transform hover:scale-110">
              <img 
                src="/precisionwellnesslogo.png" 
                alt="Precision Wellness" 
                className="h-20 sm:h-24 md:h-28 w-auto mb-4 sm:mb-6"
                style={{ imageRendering: 'auto' }}
              />
            </Link>
            <p className="text-sm sm:text-base text-neutral-dark/80 leading-relaxed mb-4 sm:mb-6">
              Monthly wellness tips, exclusive offers, and complimentary sample invites.
            </p>
            {submitted ? (
              <p className="text-sm sm:text-base text-primary font-medium">Thanks for subscribing!</p>
            ) : (
              <form 
                name="newsletter" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="flex items-center gap-2 bg-white border border-secondary rounded-lg relative"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <Mail className="ml-3 text-primary flex-shrink-0" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-2 sm:px-3 py-2.5 sm:py-2 outline-none text-neutral-dark text-sm sm:text-base"
                />
                <button 
                  type="submit"
                  className="bg-primary text-white px-4 py-2.5 sm:py-2 hover:bg-accent transition-all flex-shrink-0 text-sm sm:text-base"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div>
            <h4 className="font-semibold text-neutral-dark mb-3 sm:mb-4 text-sm sm:text-base">Our Blends</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">FIT Citrus Refresher</a></li>
              <li><a href="#" className="text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">ENERGIZE Blue Raspberry</a></li>
              <li><a href="#" className="text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">HYDRATE Tropical Refresher</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-dark mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">Client Stories</a></li>
              <li><Link to="/pricing" className="text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-dark mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="tel:985-999-4667" className="flex items-center gap-2 text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">
                  <Phone size={16} />
                  985-999-4667
                </a>
              </li>
              <li>
                <a href="mailto:info@precisionpep.com" className="flex items-center gap-2 text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">
                  <Mail size={16} />
                  info@precisionpep.com
                </a>
              </li>
              <li><a href="#" className="text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm sm:text-base text-neutral-dark/80 hover:text-primary transition-colors">Accessibility</a></li>
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

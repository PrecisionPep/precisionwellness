import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Pricing } from './pages/Pricing';
import { Certificates } from './pages/Certificates';
import { Privacy } from './pages/Privacy';

function App() {
  return (
    <Router basename="/precisionwellness">
      <ScrollToTop />
      <div className="min-h-screen bg-white" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <Header />
        <main className="pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

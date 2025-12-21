import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const categories = [
    'All Categories',
    'Weight Management',
    'Fitness & Performance',
    'Tissue Repair & Recovery',
    'Oral Peptides',
    'Organ/System Support',
    'Health & Anti-Aging',
    'Aesthetics & Skincare'
  ];

  const categoryProducts = [
    {
      title: 'Weight Management',
      image: '/weightmanagement.png',
      alt: 'Weight Management',
      count: 8,
      price: 'From $199.99',
      rating: '4.8 (45 reviews)'
    },
    {
      title: 'Fitness & Performance',
      image: '/fitness.png',
      alt: 'Fitness & Performance',
      count: 5,
      price: 'From $159.99',
      rating: '4.8 (56 reviews)'
    },
    {
      title: 'Tissue Repair & Recovery',
      image: '/tissue.png',
      alt: 'Tissue Repair & Recovery',
      count: 6,
      price: 'From $89.99',
      rating: '4.9 (78 reviews)'
    },
    {
      title: 'Oral Peptides',
      image: '/oral.png',
      alt: 'Oral Peptides',
      count: 6,
      price: 'From $299.99',
      rating: '4.8 (34 reviews)'
    },
    {
      title: 'Organ/System Support',
      image: '/box.png',
      alt: 'Organ/System Support',
      count: 7,
      price: 'From $89.99',
      rating: '4.6 (33 reviews)'
    },
    {
      title: 'Health & Anti-Aging',
      image: '/weight.png',
      alt: 'Health & Anti-Aging',
      count: 6,
      price: 'From $139.99',
      rating: '4.8 (52 reviews)'
    },
    {
      title: 'Aesthetics & Skincare',
      image: '/box.png',
      alt: 'Aesthetics & Skincare',
      count: 1,
      price: 'From $89.99',
      rating: '4.6 (58 reviews)'
    }
  ];

  const healthAntiAgingProducts = [
    {
      name: 'DSIP',
      description: 'Delta Sleep Inducing Peptide for deep sleep and nervous system recovery',
      features: ['Promotes deep sleep', 'Enhances nervous system recovery'],
      price: '$139.99',
      rating: '4.8 (52 reviews)',
      featured: true,
      slug: 'dsip'
    },
    {
      name: 'EPITHALON',
      description: 'Anti-aging peptide for longevity and sleep optimization',
      features: ['Supports longevity', 'Optimizes sleep patterns'],
      price: '$199.99',
      rating: '4.7 (38 reviews)',
      featured: true,
      slug: 'epithalon'
    },
    {
      name: 'GHK-Cu',
      description: 'Copper peptide for skin health, wound healing, and longevity',
      features: ['Supports skin health', 'Enhances wound healing'],
      price: '$149.99',
      rating: '4.6 (29 reviews)',
      featured: false,
      slug: 'ghk-cu'
    },
    {
      name: 'MOTS-C',
      description: 'Mitochondrial peptide for energy production and longevity',
      features: ['Enhances energy production', 'Supports longevity'],
      price: '$249.99',
      rating: '4.8 (31 reviews)',
      featured: true,
      slug: 'mots-c'
    },
    {
      name: 'NAD+',
      description: 'NAD+ for cellular health and anti-aging support',
      features: ['Supports cellular health', 'Anti-aging properties'],
      price: '$299.99',
      rating: '4.9 (44 reviews)',
      featured: true,
      slug: 'nad-plus'
    },
    {
      name: 'SERMORELIN',
      description: 'Growth hormone releasing peptide for anti-aging and vitality',
      features: ['Supports anti-aging', 'Enhances vitality'],
      price: '$179.99',
      rating: '4.7 (36 reviews)',
      featured: true,
      slug: 'sermorelin'
    }
  ];

  const aestheticsSkincareProducts = [
    {
      name: 'RADIANT XO SERUM',
      description: 'Advanced skincare serum for radiant skin and aesthetic enhancement',
      features: ['Promotes radiant skin', 'Enhances hair health'],
      price: '$89.99',
      rating: '4.6 (58 reviews)',
      featured: true,
      slug: 'radiant-xo-serum'
    }
  ];

  const organSystemSupportProducts = [
    {
      name: 'GONADORELIN',
      description: 'Gonadotropin-releasing hormone for healthy hormone production',
      features: ['Supports hormone production', 'Enhances libido'],
      price: '$129.99',
      rating: '4.5 (22 reviews)',
      featured: false,
      slug: 'gonadorelin'
    },
    {
      name: 'HCG',
      description: 'Human Chorionic Gonadotropin for testosterone and fertility support',
      features: ['Supports testosterone production', 'Enhances fertility'],
      price: '$89.99',
      rating: '4.6 (33 reviews)',
      featured: true,
      slug: 'hcg'
    },
    {
      name: 'KISSPEPTIN',
      description: 'Reproductive hormone for enhanced libido and hormone function',
      features: ['Enhances libido', 'Supports hormone function'],
      price: '$159.99',
      rating: '4.4 (19 reviews)',
      featured: false,
      slug: 'kisspeptin'
    },
    {
      name: 'PT-141',
      description: 'Melanotan II derivative for enhanced libido and sexual function',
      features: ['Enhances libido', 'Improves sexual function'],
      price: '$119.99',
      rating: '4.7 (47 reviews)',
      featured: true,
      slug: 'pt-141'
    },
    {
      name: 'CURCUMIN',
      description: 'Anti-inflammatory compound for gut health and inflammation reduction',
      features: ['Reduces inflammation', 'Supports gut health'],
      price: '$79.99',
      rating: '4.5 (27 reviews)',
      featured: false,
      slug: 'curcumin'
    },
    {
      name: 'VIP/BPC-157',
      description: 'Combined peptide stack for gut health and inflammation reduction',
      features: ['Supports gut health', 'Reduces inflammation'],
      price: '$149.99',
      rating: '4.8 (33 reviews)',
      featured: true,
      slug: 'vip-bpc-157'
    },
    {
      name: 'LL-37',
      description: 'Antimicrobial peptide for fighting infections and immune support',
      features: ['Fights infections', 'Supports immune function'],
      price: '$199.99',
      rating: '4.6 (21 reviews)',
      featured: false,
      slug: 'll-37'
    }
  ];

  const oralPeptidesProducts = [
    {
      name: 'DIHEXA',
      description: 'Advanced cognitive enhancer for memory and mental clarity',
      features: ['Improves memory function', 'Enhances learning ability'],
      price: '$299.99',
      rating: '4.8 (34 reviews)',
      featured: true,
      slug: 'dihexa'
    },
    {
      name: 'PE-22-28',
      description: 'Nootropic peptide for enhanced focus and cognitive performance',
      features: ['Enhances focus and concentration', 'Improves cognitive performance'],
      price: '$199.99',
      rating: '4.6 (28 reviews)',
      featured: false,
      slug: 'pe-22-28'
    },
    {
      name: 'SEMAX',
      description: 'Russian nootropic for focus, resilience, and neuroplasticity',
      features: ['Enhances focus and attention', 'Improves resilience'],
      price: '$149.99',
      rating: '4.7 (41 reviews)',
      featured: true,
      slug: 'semax'
    },
    {
      name: 'SEMAX/SELANK',
      description: 'Combined nootropic stack for cognitive function and emotional balance',
      features: ['Enhances cognitive function', 'Improves emotional balance'],
      price: '$199.99',
      rating: '4.8 (35 reviews)',
      featured: true,
      slug: 'semax-selank'
    },
    {
      name: 'OXYTOCIN',
      description: 'The love hormone for calm, safety, connection, and trust',
      features: ['Promotes feelings of calm', 'Enhances safety and security'],
      price: '$129.99',
      rating: '4.7 (39 reviews)',
      featured: true,
      slug: 'oxytocin'
    },
    {
      name: 'SELANK',
      description: 'Russian anxiolytic peptide for anxiety reduction and emotional resilience',
      features: ['Reduces anxiety', 'Enhances emotional resilience'],
      price: '$139.99',
      rating: '4.8 (46 reviews)',
      featured: true,
      slug: 'selank'
    }
  ];

  const tissueRepairRecoveryProducts = [
    {
      name: 'BPC-157',
      description: 'Body Protection Compound for accelerated healing and recovery',
      features: ['Accelerates healing process', 'Reduces inflammation'],
      price: '$89.99',
      rating: '4.9 (78 reviews)',
      featured: true,
      slug: 'bpc-157'
    },
    {
      name: 'KPV',
      description: 'Anti-inflammatory peptide for recovery support',
      features: ['Reduces inflammation', 'Supports recovery'],
      price: '$79.99',
      rating: '4.4 (31 reviews)',
      featured: false,
      slug: 'kpv'
    },
    {
      name: 'SS-31',
      description: 'Mitochondrial protective peptide for cellular recovery',
      features: ['Protects mitochondria', 'Enhances cellular recovery'],
      price: '$199.99',
      rating: '4.6 (18 reviews)',
      featured: false,
      slug: 'ss-31'
    },
    {
      name: 'TB-500',
      description: 'Thymosin Beta-4 fragment for healing and recovery',
      features: ['Promotes healing', 'Enhances recovery'],
      price: '$149.99',
      rating: '4.7 (42 reviews)',
      featured: true,
      slug: 'tb-500'
    },
    {
      name: 'THYMOSIN ALPHA-1',
      description: 'Immune system modulator for enhanced recovery',
      features: ['Modulates immune system', 'Enhances recovery'],
      price: '$179.99',
      rating: '4.5 (25 reviews)',
      featured: false,
      slug: 'thymosin-alpha-1'
    },
    {
      name: 'THYMOSIN BETA-4',
      description: 'Complete Thymosin Beta-4 for healing and tissue regeneration',
      features: ['Promotes healing', 'Enhances tissue regeneration'],
      price: '$199.99',
      rating: '4.8 (37 reviews)',
      featured: true,
      slug: 'thymosin-beta-4'
    }
  ];

  const fitnessPerformanceProducts = [
    {
      name: 'CJC-1295',
      description: 'Growth hormone releasing peptide for muscle growth and performance',
      features: ['Enhances muscle growth', 'Improves recovery time'],
      price: '$159.99',
      rating: '4.8 (56 reviews)',
      featured: true,
      slug: 'cjc-1295'
    },
    {
      name: 'FOLLISTATIN-344',
      description: 'Myostatin inhibitor for significant muscle growth',
      features: ['Inhibits myostatin activity', 'Promotes significant muscle growth'],
      price: '$249.99',
      rating: '4.9 (43 reviews)',
      featured: true,
      slug: 'follistatin-344'
    },
    {
      name: 'IGF-1 LR3',
      description: 'Long-acting growth factor for muscle growth and recovery',
      features: ['Promotes muscle growth', 'Enhances recovery'],
      price: '$199.99',
      rating: '4.7 (38 reviews)',
      featured: true,
      slug: 'igf-1-lr3'
    },
    {
      name: 'IPAMORELIN',
      description: 'Selective growth hormone releasing peptide',
      features: ['Selective growth hormone release', 'Enhances muscle growth'],
      price: '$139.99',
      rating: '4.6 (29 reviews)',
      featured: false,
      slug: 'ipamorelin'
    },
    {
      name: 'MGF',
      description: 'Mechano Growth Factor for cellular muscle growth and repair',
      features: ['Promotes cellular muscle growth', 'Enhances muscle repair'],
      price: '$179.99',
      rating: '4.5 (22 reviews)',
      featured: false,
      slug: 'mgf'
    }
  ];

  const weightManagementProducts = [
    {
      name: '5-AMINO-1MQ',
      description: 'Advanced fat loss peptide for metabolic enhancement',
      features: ['Targets stubborn fat deposits', 'Enhances metabolic function'],
      price: '$199.99',
      rating: '4.8 (45 reviews)',
      featured: true,
      slug: '5-amino-1mq'
    },
    {
      name: 'AOD-9604',
      description: 'Fat-targeting peptide that preserves muscle mass',
      features: ['Targets fat cells specifically', 'Preserves lean muscle mass'],
      price: '$179.99',
      rating: '4.7 (38 reviews)',
      featured: true,
      slug: 'aod-9604'
    },
    {
      name: 'CAGRILINTIDE',
      description: 'Advanced appetite suppression for weight loss',
      features: ['Suppresses appetite effectively', 'Supports significant weight loss'],
      price: '$299.99',
      rating: '4.9 (52 reviews)',
      featured: true,
      slug: 'cagrilintide'
    },
    {
      name: 'GLP-1 SEMA',
      description: 'Semaglutide for weight management and blood sugar control',
      features: ['Effective weight management', 'Blood sugar control'],
      price: '$249.99',
      rating: '4.8 (67 reviews)',
      featured: true,
      slug: 'glp-1-sema'
    },
    {
      name: 'GLP-1 TIRZ',
      description: 'Tirzepatide for superior weight loss and metabolic benefits',
      features: ['Superior weight loss results', 'Enhanced metabolic benefits'],
      price: '$279.99',
      rating: '4.9 (41 reviews)',
      featured: true,
      slug: 'glp-1-tirz'
    },
    {
      name: 'SLU-PP-332',
      description: 'Metabolic enhancer for efficient fat burning',
      features: ['Enhances metabolic rate', 'Promotes efficient fat burning'],
      price: '$189.99',
      rating: '4.6 (23 reviews)',
      featured: false,
      slug: 'slu-pp-332'
    },
    {
      name: 'TESAMORELIN',
      description: 'Targets abdominal fat reduction through growth hormone release',
      features: ['Targets abdominal fat specifically', 'Enhances growth hormone release'],
      price: '$219.99',
      rating: '4.7 (34 reviews)',
      featured: true,
      slug: 'tesamorelin'
    },
    {
      name: 'TESOFENSINE',
      description: 'Triple reuptake inhibitor for enhanced weight loss',
      features: ['Triple neurotransmitter action', 'Enhanced weight loss'],
      price: '$199.99',
      rating: '4.5 (19 reviews)',
      featured: false,
      slug: 'tesofensine'
    }
  ];

  const browseCategories = [
    { title: 'Weight Management', slug: 'weight-management', count: 8 },
    { title: 'Fitness & Performance', slug: 'fitness-performance', count: 5 },
    { title: 'Tissue Repair & Recovery', slug: 'tissue-repair-recovery', count: 6 },
    { title: 'Oral Peptides', slug: 'oral-peptides', count: 6 },
    { title: 'Organ/System Support', slug: 'organ-system-support', count: 7 },
    { title: 'Health & Anti-Aging', slug: 'health-anti-aging', count: 6 },
    { title: 'Aesthetics & Skincare', slug: 'aesthetics', count: 1 }
  ];

  const getCategoryCount = (category: string) => {
    if (category === 'Weight Management') return 8;
    if (category === 'Fitness & Performance') return 5;
    if (category === 'Tissue Repair & Recovery') return 6;
    if (category === 'Oral Peptides') return 6;
    if (category === 'Organ/System Support') return 7;
    if (category === 'Health & Anti-Aging') return 6;
    if (category === 'Aesthetics & Skincare') return 1;
    return 0;
  };

  const showCategoryView = selectedCategory !== 'All Categories';

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-neutral-600">
              <li>
                <Link to="/" className="flex items-center gap-1 hover:text-neutral-900 transition-colors" aria-label="Home">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-home">
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                  </svg>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right text-neutral-400">
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </li>
              <li>
                <span className="text-neutral-900 font-medium">Products</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Products Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {!showCategoryView && (
            <>
              <div className="text-center mb-16">
                <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900 mb-4">
                  Our Products
                </h1>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Discover our complete range of wellness products designed to support your health and nutrition goals
                </p>
              </div>

              {/* Category Filters */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-3 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-full font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#87CEEB] text-neutral-900'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {showCategoryView && (
            <>
              {/* Category Filters */}
              <div className="mb-12">
                <div className="flex flex-wrap gap-3 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-full font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#87CEEB] text-neutral-900'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Back Button and Category Header */}
              <div className="mb-8">
                <button
                  onClick={() => setSelectedCategory('All Categories')}
                  className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <span>←</span>
                  Back to All Categories
                </button>
                <h2 className="text-2xl font-bold text-neutral-900 mt-4">
                  {selectedCategory} Products
                </h2>
                <p className="text-neutral-600 mt-2">
                  {getCategoryCount(selectedCategory)} products available
                </p>
              </div>
            </>
          )}

          {/* Products Grid */}
          {!showCategoryView ? (
            (() => {
              const filteredProducts = categoryProducts.filter((product) => 
                selectedCategory === 'All Categories' || product.title === selectedCategory
              );
              
              return filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <div key={product.title} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                          <img
                            alt={product.alt}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            src={product.image}
                            style={{ imageRendering: 'auto' }}
                          />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.title}</h3>
                        <p className="text-neutral-600 mb-4">{product.count} products available</p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm text-neutral-600">{product.rating}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedCategory(product.title)}
                          className="block w-full bg-[#87CEEB] text-neutral-900 font-semibold py-3 px-6 rounded-full hover:bg-[#79c9f0] transition-colors text-center"
                        >
                          View Products
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-neutral-600">No products found in this category.</p>
                </div>
              );
            })()
          ) : selectedCategory === 'Weight Management' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {weightManagementProducts.map((product) => (
                <div key={product.name} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        src={`${import.meta.env.BASE_URL}weightmanagement.png`}
                        style={{ imageRendering: 'auto' }}
                      />
                      {product.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">FEATURED</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                    <p className="text-neutral-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className={`flex items-center gap-2 ${index === 0 ? 'mb-2' : ''}`}>
                          <div className="w-2 h-2 rounded-full bg-[#87CEEB]"></div>
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-neutral-600">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="flex-1 bg-neutral-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-black transition-colors text-center"
                      >
                        View Product
                      </a>
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="px-6 py-3 border-2 border-neutral-300 rounded-full font-semibold text-neutral-700 hover:border-neutral-400 transition-colors"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedCategory === 'Fitness & Performance' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {fitnessPerformanceProducts.map((product) => (
                <div key={product.name} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        src={`${import.meta.env.BASE_URL}fitness.png`}
                        style={{ imageRendering: 'auto' }}
                      />
                      {product.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">FEATURED</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                    <p className="text-neutral-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className={`flex items-center gap-2 ${index === 0 ? 'mb-2' : ''}`}>
                          <div className="w-2 h-2 rounded-full bg-[#87CEEB]"></div>
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-neutral-600">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="flex-1 bg-neutral-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-black transition-colors text-center"
                      >
                        View Product
                      </a>
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="px-6 py-3 border-2 border-neutral-300 rounded-full font-semibold text-neutral-700 hover:border-neutral-400 transition-colors"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedCategory === 'Tissue Repair & Recovery' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {tissueRepairRecoveryProducts.map((product) => (
                <div key={product.name} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        src={`${import.meta.env.BASE_URL}tissue.png`}
                        style={{ imageRendering: 'auto' }}
                      />
                      {product.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">FEATURED</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                    <p className="text-neutral-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className={`flex items-center gap-2 ${index === 0 ? 'mb-2' : ''}`}>
                          <div className="w-2 h-2 rounded-full bg-[#87CEEB]"></div>
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-neutral-600">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="flex-1 bg-neutral-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-black transition-colors text-center"
                      >
                        View Product
                      </a>
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="px-6 py-3 border-2 border-neutral-300 rounded-full font-semibold text-neutral-700 hover:border-neutral-400 transition-colors"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedCategory === 'Oral Peptides' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {oralPeptidesProducts.map((product) => (
                <div key={product.name} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        src={`${import.meta.env.BASE_URL}oral.png`}
                        style={{ imageRendering: 'auto' }}
                      />
                      {product.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">FEATURED</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                    <p className="text-neutral-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className={`flex items-center gap-2 ${index === 0 ? 'mb-2' : ''}`}>
                          <div className="w-2 h-2 rounded-full bg-[#87CEEB]"></div>
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-neutral-600">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="flex-1 bg-neutral-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-black transition-colors text-center"
                      >
                        View Product
                      </a>
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="px-6 py-3 border-2 border-neutral-300 rounded-full font-semibold text-neutral-700 hover:border-neutral-400 transition-colors"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedCategory === 'Organ/System Support' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {organSystemSupportProducts.map((product) => (
                <div key={product.name} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        src={`${import.meta.env.BASE_URL}box.png`}
                        style={{ imageRendering: 'auto' }}
                      />
                      {product.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">FEATURED</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                    <p className="text-neutral-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className={`flex items-center gap-2 ${index === 0 ? 'mb-2' : ''}`}>
                          <div className="w-2 h-2 rounded-full bg-[#87CEEB]"></div>
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-neutral-600">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="flex-1 bg-neutral-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-black transition-colors text-center"
                      >
                        View Product
                      </a>
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="px-6 py-3 border-2 border-neutral-300 rounded-full font-semibold text-neutral-700 hover:border-neutral-400 transition-colors"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedCategory === 'Health & Anti-Aging' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {healthAntiAgingProducts.map((product) => (
                <div key={product.name} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        src={`${import.meta.env.BASE_URL}weight.png`}
                        style={{ imageRendering: 'auto' }}
                      />
                      {product.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">FEATURED</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                    <p className="text-neutral-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className={`flex items-center gap-2 ${index === 0 ? 'mb-2' : ''}`}>
                          <div className="w-2 h-2 rounded-full bg-[#87CEEB]"></div>
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-neutral-600">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="flex-1 bg-neutral-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-black transition-colors text-center"
                      >
                        View Product
                      </a>
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="px-6 py-3 border-2 border-neutral-300 rounded-full font-semibold text-neutral-700 hover:border-neutral-400 transition-colors"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedCategory === 'Aesthetics & Skincare' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {aestheticsSkincareProducts.map((product) => (
                <div key={product.name} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-[#EAE7DC] overflow-hidden">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        src={`${import.meta.env.BASE_URL}box.png`}
                        style={{ imageRendering: 'auto' }}
                      />
                      {product.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">FEATURED</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                    <p className="text-neutral-600 mb-4">{product.description}</p>
                    <div className="mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className={`flex items-center gap-2 ${index === 0 ? 'mb-2' : ''}`}>
                          <div className="w-2 h-2 rounded-full bg-[#87CEEB]"></div>
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-neutral-900">{product.price}</div>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-neutral-600">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="flex-1 bg-neutral-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-black transition-colors text-center"
                      >
                        View Product
                      </a>
                      <a
                        href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
                        className="px-6 py-3 border-2 border-neutral-300 rounded-full font-semibold text-neutral-700 hover:border-neutral-400 transition-colors"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-neutral-600">Products for this category coming soon.</p>
            </div>
          )}

          {/* Not Sure Section */}
          <div className="mt-16 text-center">
            <div className="bg-neutral-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Not sure which product is right for you?
              </h2>
              <p className="text-neutral-600 mb-6">
                Our wellness experts are here to help you find the perfect products for your goals
              </p>
              <Link
                to="/"
                className="inline-flex items-center bg-[#87CEEB] text-neutral-900 font-semibold py-3 px-8 rounded-full hover:bg-[#79c9f0] transition-colors"
              >
                Get Personalized Recommendations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <div className="bg-neutral-50 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {browseCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/products/${category.slug}`}
                className="p-4 rounded-xl transition-all duration-200 bg-white text-neutral-700 hover:bg-neutral-100 hover:shadow-sm"
              >
                <h3 className="font-semibold mb-1">{category.title}</h3>
                <p className="text-sm opacity-80">{category.count} products available</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

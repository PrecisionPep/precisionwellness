import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import JSZip from 'jszip';

export function StatsSection() {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationContainer.current) return;

    let anim: any = null;

    // Fetch the .lottie file (which is a ZIP archive)
    fetch('https://cdn.prod.website-files.com/66a7ac812a79bcf658a543e7/66a7ac812a79bcf658a54480_Pulse_Animation.lottie')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.arrayBuffer();
      })
      .then(arrayBuffer => {
        // Unzip the .lottie file
        return JSZip.loadAsync(arrayBuffer);
      })
      .then(zip => {
        // List all files in the ZIP for debugging
        const files = Object.keys(zip.files);
        console.log('Files in .lottie archive:', files);
        
        // Find the animation.json file inside the ZIP
        // .lottie files typically contain animation.json in the root
        let animationFile = zip.file('animation.json');
        if (!animationFile) {
          // Try other common names or paths
          animationFile = zip.file('animations/animation.json') || 
                         zip.file('manifest.json') ||
                         files.find(name => name.endsWith('.json') && !name.includes('manifest')) 
                           ? zip.file(files.find(name => name.endsWith('.json') && !name.includes('manifest'))!)
                           : null;
          
          if (!animationFile) {
            throw new Error('No JSON file found in .lottie archive. Files: ' + files.join(', '));
          }
        }
        return animationFile.async('string');
      })
      .then(jsonString => {
        try {
          // Parse the JSON and load the animation
          const animationData = JSON.parse(jsonString);
          
          // Validate animationData structure
          if (!animationData || typeof animationData !== 'object') {
            throw new Error('Invalid animation data format');
          }
          
          console.log('Animation data loaded, keys:', Object.keys(animationData));
          
          // Ensure container still exists and animationData is valid
          if (!animationContainer.current) {
            console.error('Container no longer exists');
            return;
          }
          
          if (!animationData.v || !animationData.fr) {
            console.error('Invalid animation data structure. Expected v and fr properties.');
            console.error('Animation data:', animationData);
            return;
          }
          
          anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
          });
          
          // Ensure the SVG is visible and positioned correctly
          setTimeout(() => {
            const svgElement = animationContainer.current?.querySelector('svg');
            if (svgElement) {
              svgElement.style.width = '100%';
              svgElement.style.height = '100%';
              svgElement.style.display = 'block';
              svgElement.style.position = 'absolute';
              svgElement.style.bottom = '0';
              svgElement.style.left = '0';
              console.log('SVG element styled');
            } else {
              console.warn('SVG element not found in container');
            }
          }, 100);
          
          console.log('Lottie animation loaded successfully');
        } catch (parseError) {
          console.error('Failed to parse animation JSON:', parseError);
          console.error('JSON string preview:', jsonString?.substring(0, 200));
        }
      })
      .catch(error => {
        console.error('Failed to load Lottie animation:', error);
      });

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="group">
            <h2 className="text-6xl font-bold text-neutral-900 mb-4">55K</h2>
            <p className="text-xl text-neutral-600">Patients use DearDoc everyday</p>
          </div>
          <div className="group">
            <h2 className="text-6xl font-bold text-neutral-900 mb-4">50M</h2>
            <p className="text-xl text-neutral-600">Page interactions</p>
          </div>
          <div className="group">
            <h2 className="text-6xl font-bold text-neutral-900 mb-4">5K</h2>
            <p className="text-xl text-neutral-600">Practices served nationwide</p>
          </div>
        </div>
      </div>
      {/* Pulse animation positioned absolutely within section */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none" 
        style={{ 
          zIndex: 1, 
          height: '240px',
          overflow: 'hidden'
        }}
      >
        <div 
          ref={animationContainer} 
          className="w-full h-full" 
          style={{ 
            minHeight: '240px', 
            background: 'transparent'
          }}
        />
      </div>
    </section>
  );
}


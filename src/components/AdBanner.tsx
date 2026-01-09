import { useEffect, useRef } from "react";

const AdBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear previous content
    containerRef.current.innerHTML = '';
    
    // Create and inject the ad scripts
    const optionsScript = document.createElement('script');
    optionsScript.innerHTML = `
      atOptions = {
        'key' : '71731f5aa1a266867d7af3cf65e8752f',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    
    const invokeScript = document.createElement('script');
    invokeScript.src = 'https://www.highperformanceformat.com/71731f5aa1a266867d7af3cf65e8752f/invoke.js';
    invokeScript.async = true;
    
    containerRef.current.appendChild(optionsScript);
    containerRef.current.appendChild(invokeScript);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-[728px] mx-auto min-h-[90px] flex items-center justify-center bg-muted/30 rounded overflow-hidden"
    />
  );
};

export default AdBanner;

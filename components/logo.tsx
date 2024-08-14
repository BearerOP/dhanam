"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'; // Import useTheme hook from next-themes
import MinimalLoaderComponent from './loader'; // Import the MinimalLoader component

const Logo: React.FC = () => {
  const { theme } = useTheme(); // Get the current theme
  const [loading, setLoading] = useState(true); // State to track loading status

  // Handler to update loading status
  const handleImageLoad = () => setLoading(false);

  // This effect is for handling the image load event
  useEffect(() => {
    setLoading(true); // Set loading to true when the component mounts
  }, [theme]);

  const logoSrc =
    theme === 'dark'
      ? 'https://firebasestorage.googleapis.com/v0/b/theslugproject.appspot.com/o/logo-dark.png?alt=media&token=064ce29f-3e0d-4225-9fd3-ff2cdbf09c40'
      : 'https://firebasestorage.googleapis.com/v0/b/theslugproject.appspot.com/o/logo-light.png?alt=media&token=538ebbba-07bd-4521-8cb5-1a0407d98b84';

  return (
    <div className='h-16 w-16'>
      {loading && <MinimalLoaderComponent />} 
      <img
        src={logoSrc}
        alt="Logo"
        className={`h-16 ${loading ? 'hidden' : ''}`} // Hide logo while loading
        onLoad={handleImageLoad} // Set loading to false when image is loaded
      />
    </div>
  );
};

export default Logo;

"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const logoStyle: { 
    container: React.CSSProperties;
    containerHover: React.CSSProperties;
    text: React.CSSProperties;
} = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px', // Adjust the width as needed
        height: '50px', // Adjust the height as needed
        background: 'linear-gradient(to bottom, #0a0217, #451b90)', // Gradient background
        borderRadius: '10px', // Rounded corners
        fontSize: '36px', // Adjust the font size as needed
        color: 'white', // Font color
        fontFamily: "'Noto Sans', Arial, sans-serif", // Using Noto Sans font
        textAlign: 'center',
        transition: 'all ease-in-out 500ms',
    },
    containerHover: {
        boxShadow: '0 4px 6px rgba(195, 161, 161, 0.1)', // Subtle shadow for depth
        transform: 'translateY(-5px)', // Scale up on hover
    },
    text: {
        background: 'linear-gradient(to bottom, #8f21cf, #ecccff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: "'Noto Sans', Arial, sans-serif",
        paddingBottom: '5px',
        fontWeight:'900'
    },
};

const Logo: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className='flex justify-center items-center'>
            <div
                style={{
                    ...logoStyle.container,
                    ...(isHovered ? logoStyle.containerHover : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className='flex justify-center items-center'>
                    <Link
                        href="/"
                        style={logoStyle.text}
                    >
                        ध
                        {/* अ */}
                        {/* स */}
                    </Link>
                </span>
            </div>
        </div>
        </motion.div>
    );
}

export { Logo, logoStyle };
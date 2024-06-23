import React, { useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiSpringboot, SiGradle, SiDocker } from 'react-icons/si';

const generateRandomBinaryGrid = (rows: number, cols: number) => {
    let binaryGrid = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            binaryGrid += Math.random() > 0.5 ? '0' : '1';
        }
        binaryGrid += '\n';
    }
    return binaryGrid;
};

const SplashScreen: React.FC = () => {
    useEffect(() => {
        const binaryBackground = document.getElementById('binary-background');
        if (binaryBackground) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const cols = Math.floor(width / 8); // assuming 8px per character
            const rows = Math.floor(height / 16); // assuming 16px per line
            binaryBackground.innerHTML = generateRandomBinaryGrid(rows, cols);
        }
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
            <div
                id="binary-background"
                className="absolute inset-0 text-xs text-gray-700 font-mono"
                style={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.2rem',
                    color: 'rgba(255, 255, 255, 0.1)',
                    letterSpacing: '0.1rem',
                    wordWrap: 'break-word',
                    userSelect: 'none',
                    zIndex: 1,
                }}
            ></div>
            <div className="relative z-10 p-10 text-center bg-opacity-75 rounded-lg bg-gray-800">
                <h1 className="mb-8 text-4xl font-bold">RycaDev Templates</h1>
                <div className="flex justify-center space-x-6">
                    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" title="React">
                        <FaReact className="w-16 h-16 text-cyan-400" />
                    </a>
                    <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" title="Vite">
                        <SiVite className="w-16 h-16 text-purple-400" />
                    </a>
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" title="Tailwind CSS">
                        <SiTailwindcss className="w-16 h-16 text-blue-400" />
                    </a>
                    <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer" title="Spring Boot">
                        <SiSpringboot className="w-16 h-16 text-green-400" />
                    </a>
                    <a href="https://gradle.org" target="_blank" rel="noopener noreferrer" title="Gradle">
                        <SiGradle className="w-16 h-16 text-green-600" />
                    </a>
                    <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" title="Docker">
                        <SiDocker className="w-16 h-16 text-blue-400" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;

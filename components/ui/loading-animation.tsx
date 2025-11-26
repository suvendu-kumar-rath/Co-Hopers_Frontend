'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log('LoadingAnimation mounted');
    
    // Simple timer - show for 6 seconds then complete
    const timer = setTimeout(() => {
      console.log('Loading timer completed');
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 6000);

    return () => {
      console.log('LoadingAnimation cleanup');
      clearTimeout(timer);
    };
  }, [onComplete]);

  const handleVideoEnd = () => {
    console.log('Video ended');
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 w-full h-full theme-bg-primary flex items-center justify-center"
        >
          {/* Video Container - Full Screen */}
          <motion.div 
            className="relative w-full h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <video
              autoPlay
              muted
              loop={false}
              playsInline
              className="w-full h-full object-cover"
              onEnded={handleVideoEnd}
              onLoadedData={() => console.log('Video loaded successfully')}
              onError={(e) => console.error('Video failed to load:', e)}
              onCanPlay={() => console.log('Video can play')}
              onPlay={() => console.log('Video started playing')}
            >
              <source src="/images/lol.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Loading indicator overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="flex items-center gap-1">
                  <motion.div 
                    className="w-1.5 h-1.5 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-1.5 h-1.5 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className="w-1.5 h-1.5 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
                <span className="text-white text-xs font-medium ml-2">Loading...</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Coffee, Code2, Users } from 'lucide-react';

interface StatsBarProps {
  compact?: boolean;
}

export const StatsBar: React.FC<StatsBarProps> = ({ compact = false }) => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [animationComplete, setAnimationComplete] = useState([false, false, false, false]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const stats = useMemo(() => [
    { icon: Trophy, value: 50, suffix: '+', label: 'Projects', color: 'text-yellow-400' },
    { icon: Coffee, value: 1200, suffix: '', label: 'Coffees', color: 'text-amber-400' },
    { icon: Code2, value: 500000, suffix: '', label: 'Lines', color: 'text-green-400' },
    { icon: Users, value: 30, suffix: '+', label: 'Clients', color: 'text-blue-400' }
  ], []);

  const formatValue = (value: number, index: number) => {
    if (index === 1) { // Coffees
      return value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString();
    }
    if (index === 2) { // Lines
      return value >= 1000 ? `${(value / 1000).toFixed(0)}K` : value.toString();
    }
    return value.toString();
  };

  // Easing function for smooth animation
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500; // 2.5 seconds for smoother animation
    const startTime = Date.now();

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCounts(() => {
        return stats.map((stat) => {
          const targetValue = stat.value;
          const currentValue = Math.floor(targetValue * easedProgress);
          return currentValue;
        });
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        // Mark animation as complete
        setAnimationComplete(stats.map(() => true));
      }
    };

    // Start animation with a slight delay for better UX
    const timer = setTimeout(() => {
      requestAnimationFrame(animateCounters);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [isInView, stats]);

  return (
    <motion.div 
      ref={ref}
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className={`grid ${compact ? 'grid-cols-4 gap-3' : 'grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6'}`}>
        {stats.map(({ icon: Icon, suffix, label, color }, index) => (
          <motion.div
            key={index}
            className={`group relative flex items-center ${compact ? 'gap-2 p-3' : 'gap-4 p-5'} bg-neutral-900/50 rounded-xl border border-neutral-800 backdrop-blur-sm overflow-hidden`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ 
              scale: compact ? 1.02 : 1.05, 
              borderColor: 'rgb(163 163 163 / 0.3)',
              transition: { duration: 0.2 } 
            }}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              initial={{ x: '-100%' }}
              animate={animationComplete[index] ? { x: '100%' } : {}}
              transition={{ duration: 1, delay: 2.8 + index * 0.2 }}
            />
            
            {/* Icon with color animation */}
            <motion.div
              animate={animationComplete[index] ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.6, delay: 2.5 + index * 0.1 }}
            >
              <Icon 
                className={`${compact ? 'w-5 h-5' : 'w-6 h-6'} transition-colors duration-300 ${
                  animationComplete[index] ? color : 'text-neutral-500'
                }`} 
              />
            </motion.div>
            
            <div className="relative z-10">
              <motion.div 
                className={`${compact ? 'text-base' : 'text-xl md:text-2xl'} font-light tabular-nums`}
                animate={animationComplete[index] ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.4, delay: 2.5 + index * 0.1 }}
              >
                <span className={`transition-colors duration-300 ${
                  animationComplete[index] ? 'text-white' : 'text-neutral-300'
                }`}>
                  {formatValue(counts[index], index)}
                </span>
                <span className={`transition-colors duration-300 ${
                  animationComplete[index] ? color : 'text-neutral-400'
                }`}>
                  {suffix}
                </span>
              </motion.div>
              {!compact && (
                <div className="text-sm text-neutral-500 uppercase tracking-wider">
                  {label}
                </div>
              )}
              {compact && (
                <div className="text-xs text-neutral-600 uppercase tracking-wider">
                  {label}
                </div>
              )}
            </div>

            {/* Pulse effect on completion */}
            {animationComplete[index] && (
              <motion.div
                className="absolute inset-0 border-2 border-white/20 rounded-xl"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.05, opacity: 0 }}
                transition={{ duration: 0.8, delay: 2.5 + index * 0.1 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

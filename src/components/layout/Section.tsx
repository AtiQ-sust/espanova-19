import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'muted' | 'gradient' | 'transparent';
  textAlign?: 'left' | 'center' | 'right';
  titleClassName?: string;
  subtitleClassName?: string;
}

const Section = ({
  children,
  title,
  subtitle,
  className,
  containerSize = 'lg',
  padding = 'lg',
  background = 'transparent',
  textAlign = 'left',
  titleClassName,
  subtitleClassName,
}: SectionProps) => {
  // Container width classes
  const containerClasses = {
    sm: 'max-w-3xl', // 720px
    md: 'max-w-5xl', // 960px  
    lg: 'max-w-7xl', // 1200px
    full: 'max-w-none',
  };

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  // Background classes
  const backgroundClasses = {
    white: 'bg-white',
    muted: 'bg-muted',
    gradient: 'bg-gradient-primary',
    transparent: '',
  };

  // Text alignment classes
  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <section 
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <div 
        className={cn(
          'container mx-auto px-4',
          containerClasses[containerSize]
        )}
      >
        {/* Section Header */}
        {(title || subtitle) && (
          <div 
            className={cn(
              'mb-12',
              textAlignClasses[textAlign]
            )}
          >
            {title && (
              <h2 
                className={cn(
                  'text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold mb-4',
                  background === 'gradient' ? 'text-white' : 'text-foreground',
                  titleClassName
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p 
                className={cn(
                  'text-lg md:text-xl leading-relaxed max-w-3xl',
                  textAlign === 'center' && 'mx-auto',
                  textAlign === 'right' && 'ml-auto',
                  background === 'gradient' ? 'text-white/90' : 'text-muted-foreground',
                  subtitleClassName
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
};

export default Section;
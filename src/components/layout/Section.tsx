import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  background?: 'default' | 'muted' | 'primary' | 'gradient';
  textAlign?: 'left' | 'center' | 'right';
  titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Section = ({
  children,
  title,
  subtitle,
  className,
  containerSize = 'xl',
  padding = 'lg',
  background = 'default',
  textAlign = 'center',
  titleLevel = 'h2',
}: SectionProps) => {
  const containerClasses = {
    sm: 'container-md',
    md: 'container-md',
    lg: 'container-lg', 
    xl: 'container-xl',
    full: 'w-full px-4',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    primary: 'bg-primary text-primary-foreground',
    gradient: 'bg-gradient-primary text-white',
  };

  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const TitleComponent = titleLevel;

  return (
    <section 
      className={cn(
        'w-full',
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className={containerClasses[containerSize]}>
        {(title || subtitle) && (
          <div 
            className={cn(
              'mb-12',
              textAlignClasses[textAlign]
            )}
          >
            {title && (
              <TitleComponent className="mb-4 font-bold text-foreground">
                {title}
              </TitleComponent>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
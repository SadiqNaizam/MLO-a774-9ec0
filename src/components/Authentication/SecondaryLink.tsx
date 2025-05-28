import React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

interface SecondaryLinkProps extends Omit<ButtonProps, 'variant' | 'size'> {
  children: React.ReactNode;
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({ children, className, ...props }) => {
  return (
    <Button
      variant="link"
      className={cn(
        'text-muted-foreground text-sm p-0 h-auto hover:text-muted-foreground/80 font-normal',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryLink;

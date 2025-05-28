import React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

interface PrimaryButtonProps extends Omit<ButtonProps, 'variant'> {
  // children, onClick, className, type, disabled etc. are inherited from ButtonProps
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      className={cn(
        'bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;

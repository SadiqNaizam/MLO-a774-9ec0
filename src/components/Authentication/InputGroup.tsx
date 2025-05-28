import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputGroupProps {
  usernameValue: string;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordValue: string;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  usernameInputId?: string;
  passwordInputId?: string;
  usernameLabel?: string;
  passwordLabel?: string;
  usernamePlaceholder?: string;
  passwordPlaceholder?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  usernameValue,
  onUsernameChange,
  passwordValue,
  onPasswordChange,
  usernameInputId = 'username',
  passwordInputId = 'password',
  usernameLabel = 'Username',
  passwordLabel = 'Password',
  usernamePlaceholder = 'Enter your username',
  passwordPlaceholder = 'Enter your password',
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label htmlFor={usernameInputId} className="block text-sm font-medium text-card-foreground mb-1.5">
          {usernameLabel}
        </Label>
        <Input
          type="text"
          id={usernameInputId}
          value={usernameValue}
          onChange={onUsernameChange}
          placeholder={usernamePlaceholder}
          className={cn(
            'w-full rounded-lg border p-2 text-sm',
            'border-input bg-transparent text-card-foreground placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background'
          )}
          autoComplete="username"
        />
      </div>
      <div>
        <Label htmlFor={passwordInputId} className="block text-sm font-medium text-card-foreground mb-1.5">
          {passwordLabel}
        </Label>
        <Input
          type="password"
          id={passwordInputId}
          value={passwordValue}
          onChange={onPasswordChange}
          placeholder={passwordPlaceholder}
          className={cn(
            'w-full rounded-lg border p-2 text-sm',
            'border-input bg-transparent text-card-foreground placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background'
          )}
          autoComplete="current-password"
        />
      </div>
    </div>
  );
};

export default InputGroup;

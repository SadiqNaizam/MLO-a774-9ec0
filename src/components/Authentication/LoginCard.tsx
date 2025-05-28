import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import InputGroup from './InputGroup';
import PrimaryButton from './PrimaryButton';
import SecondaryLink from './SecondaryLink';

const LoginCard: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    if (!username || !password) {
      console.warn('Username and password are required.');
      // Optionally, set error states to display messages in the UI
      return;
    }
    setIsLoading(true);
    console.log('Attempting to log in with username:', username); // Avoid logging password in production
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login successful (simulated)!');
      // In a real app: navigate user, update auth context, show success toast
      setUsername(''); 
      setPassword('');
    } catch (error) {
      console.error('Login failed (simulated):', error);
      // In a real app: show error toast/message to user
    } finally {
      setIsLoading(false);
    }
  }, [username, password]);

  return (
    <Card className={cn('w-[400px] bg-card text-card-foreground p-8 rounded-lg shadow-md')}>
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-card-foreground">
          Log in
        </h2>
        
        <InputGroup
          usernameValue={username}
          onUsernameChange={(e) => setUsername(e.target.value)}
          passwordValue={password}
          onPasswordChange={(e) => setPassword(e.target.value)}
          // Default placeholders in InputGroup are 'Enter your username/password'
          // To match image (no placeholders, only labels), pass empty strings:
          // usernamePlaceholder=""
          // passwordPlaceholder=""
        />
        
        <PrimaryButton 
          onClick={handleLogin} 
          disabled={isLoading || !username || !password} 
          type="button" 
          className="w-full py-3 text-base font-semibold"
        >
          {isLoading ? 'Logging in...' : 'Log in'}
        </PrimaryButton>
        
        <div className="flex items-center justify-center pt-1 text-center">
          <span className="text-sm text-muted-foreground mr-1">or,</span>
          <SecondaryLink 
            onClick={() => { 
              console.log('Sign up link clicked'); 
              // Implement navigation or modal for sign-up here
            }}
            className="text-sm" 
          >
            sign up
          </SecondaryLink>
        </div>
      </div>
    </Card>
  );
};

export default LoginCard;

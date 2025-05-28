import React from 'react';
import LoginCard from '../components/Authentication/LoginCard';

/**
 * LoginPage is the main page component for user authentication.
 * It provides the overall layout for the login view, centering the LoginCard component.
 * The layout styling (background color, flex centering) is applied here, 
 * while the LoginCard itself handles its specific appearance and functionality.
 */
const LoginPage: React.FC = () => {
  return (
    <main 
      className="flex items-center justify-center h-screen bg-background"
      role="main" // Added role for accessibility
    >
      <LoginCard />
    </main>
  );
};

export default LoginPage;

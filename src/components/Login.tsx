import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import kamiGif from '../public/assets/kami.gif';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'KamiAdmin' && password === 'Simple-Kami-01') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] p-4 font-sans">
      <Card className="w-[40vw] bg-black border-[#333] text-[#00FF00] rounded-[10px]">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <img src={kamiGif} alt="Kami Logo" className="h-auto object-contain" style={{ width: '15%' }} />
          </div>
          <CardTitle className="text-2xl font-bold text-center" style={{ color: '#00FF00' }}>KAMI CONTENT DASHBOARD</CardTitle>
          <CardDescription className="text-center" style={{ color: '#00FF00', marginBottom: '40px' }}>
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4 pt-0">
            <div className="space-y-2">
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 text-center rounded-[10px] border-gray-600 placeholder:text-[#00FF00]/50 focus:border-[#00FF00]"
                style={{ backgroundColor: '#2A2A2A', color: '#00FF00' }}
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-center rounded-[10px] border-gray-600 placeholder:text-[#00FF00]/50 focus:border-[#00FF00]"
                style={{ backgroundColor: '#2A2A2A', color: '#00FF00' }}
              />
            </div>
            {error && (
              <p className="text-sm text-center" style={{ color: '#ff0000' }}>{error}</p>
            )}
          </CardContent>
          <CardFooter className="pt-4">
            <Button type="submit" className="w-full h-12 rounded-[10px] mb-[40px] text-black hover:bg-[#00FF00]/90" style={{ backgroundColor: '#00FF00' }}>
              Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
      <div className="mt-10 text-white text-sm" style={{ marginTop: '40px' }}>
        Copyright Kami Unlimites 2026. All Rights Reserved
      </div>
    </div>
  );
}

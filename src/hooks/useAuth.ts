
'use client';

import { useAuthStore } from '@/store/auth.store';
import { useRouter } from 'next/navigation';
import { UserRole } from '@/types/contracts';

export const useAuth = () => {
  const { user, isLoading, setUser, setIsLoading, setRole } = useAuthStore();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    // This is a mock login, real logic would be here
    setIsLoading(true);
    const mockUser = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        role: 'CLIENT' as UserRole,
        isActive: true,
        avatarUrl: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    setUser(mockUser);
    router.push('/dashboard');
    setIsLoading(false);
  };

  const logout = async () => {
    setUser(null);
    router.push('/login');
  };

  return {
    user,
    isLoading,
    login,
    logout,
    setRole,
    isAuthenticated: !!user,
    role: user?.role
  };
};

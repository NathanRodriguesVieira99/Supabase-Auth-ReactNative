import type { User } from '@supabase/supabase-js';
import { createContext, useContext, useState } from 'react';

interface AuthContextProps {
    user: User | null;
    setAuth: (authUser: User | null) => void;
}

// cria um contexto para verificar se está logado ou não
const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const setAuth = (authUser: User | null) => {
        setUser(authUser);
    };

    return <AuthContext.Provider value={{ user, setAuth }}>{children}</AuthContext.Provider>;
};

// custom hook desse context
export const useAuth = () => useContext(AuthContext);

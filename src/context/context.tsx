import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProviderProps, ContextType } from "../types/types";

export const AuthContext = createContext<ContextType>({} as ContextType);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();
  const signIn = (newUser: string, cb: () => void) => {
    setUser(newUser);
    cb();
  };
  const signOut = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

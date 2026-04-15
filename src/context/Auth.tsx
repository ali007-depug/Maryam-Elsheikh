import { createContext, useContext } from "react";
import type { User } from "firebase/auth";
import type { userData } from "./AuthProvider";

interface AuthContextType {
  user: User | null;
  userData:userData | null;
  loading: boolean;
  signup: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(context === undefined){
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
};

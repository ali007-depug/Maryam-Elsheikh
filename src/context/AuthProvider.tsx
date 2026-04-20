import React, { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { AuthContext } from "./Auth";
import type { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import DashboardLoading from "../components/ui/DashboardLoading";

export interface userData {
  name: string;
  email: string;
  role:string;
  createdAt: Date;
}
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<userData | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // signup logic
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login logic
  const login = async (email: string, password: string) => {
    const userCred = await signInWithEmailAndPassword(auth, email, password);

    const approvedUser = await getDoc(doc(db, "users", userCred.user.uid));

    if (!approvedUser.exists()) {
      await signOut(auth);
      throw new Error("Your account is in Pending users");
    }

    return userCred;
  };

  // logout logic
  const logout = () => {
    return signOut(auth);
  };

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // check the admin
        const approvedUser = await getDoc(doc(db, "users", currentUser.uid));
        if (approvedUser.exists()) {
          const data = approvedUser.data() as userData;
          setUserData(data);
          if(data.role === "admin") {
            setIsAdmin(true);
          }
        } else {
          setUserData(null);
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { user, userData, loading, signup, logout, login, isAdmin };
  // const value = { user, userData, loading, signup, logout, login };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <DashboardLoading /> : children}
    </AuthContext.Provider>
  );
}

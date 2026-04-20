import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if it's admin
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }
      const adminDoc = getDoc(doc(db, "admins", user.uid));
      setIsAdmin((await adminDoc).exists());
      setLoading(false);
    };

    checkAdmin();
  }, []);

  return { isAdmin, loading };
}

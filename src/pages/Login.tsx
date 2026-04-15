import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, LogIn, Loader2 } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../lib/firebase";
import { motion } from "framer-motion";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Please enter your password"),
});

type LoginData = z.infer<typeof loginSchema>;

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginData) {
    try {
      const userCred = await login(data.email, data.password);
      const user = userCred.user;
      const approvedUser = doc(db, "admin", user.uid);
      const approveSnap = await getDoc(approvedUser);
      
      if (approveSnap.exists()) {
        navigate("/dashboard");
      } else {
        await signOut(auth);
        setError("root", { message: "Account not approved by admin yet." });
      }
    } catch (error: any) {
      setError("root", { message: "Wrong email or password." });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 relative">
      {/* Soft background glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-900/10 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md z-10"
      >
        <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="pt-10 pb-2 text-center">
            <CardTitle className="text-3xl font-bold text-white tracking-tight">
              Login
            </CardTitle>
            <CardDescription className="text-slate-400 text-base">
              Enter your details to manage your portfolio
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Error Message */}
              {errors.root && (
                <div className="flex items-center gap-3 text-sm font-medium text-red-400 bg-red-400/10 border border-red-400/20 p-3 rounded-xl">
                  <AlertCircle size={18} />
                  {errors.root.message}
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-slate-200 ml-1">Email Address</Label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  {...register("email")}
                  className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-orange-500 focus:border-orange-500 rounded-xl transition-all"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 ml-1">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <Label className="text-sm font-medium text-slate-200">Password</Label>
                  <Link to="#" className="text-xs text-orange-500 hover:text-orange-400 transition-colors font-medium">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  className="h-12 bg-white/5 border-white/10 text-white focus:ring-orange-500 focus:border-orange-500 rounded-xl transition-all"
                />
                {errors.password && (
                  <p className="text-xs text-red-400 ml-1">{errors.password.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-orange-600 hover:bg-orange-500 text-white font-bold text-base rounded-xl shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <LogIn size={20} />
                    Sign In
                  </>
                )}
              </Button>

              {/* Simple Footer */}
              <p className="text-center text-sm text-slate-500">
                New here?{" "}
                <Link to="/signup" className="text-orange-500 font-bold hover:underline underline-offset-4">
                  Create an account
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
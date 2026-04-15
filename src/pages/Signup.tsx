import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "../lib/firebase";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, Loader2, User, Mail, CheckCircle } from "lucide-react";

const schema = z
  .object({
    fName: z.string().min(2, "Name is too short"),
    email: z.email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function Signup() {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const AdminEmail = "aliroma849@gmail.com";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSumbit(data: FormData) {
    try {
      const userCred = await signup(data.email, data.password);
      const user = userCred.user;
      
      const targetCollection = data.email === AdminEmail || data.email === "maryamelsheikh1@gmail.com" ? "admin" : "pending-users";
      
      await setDoc(doc(db, targetCollection, user.uid), {
        name: data.fName,
        email: data.email,
        createdAt: new Date(),
      });

      await auth.signOut();
      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 relative overflow-hidden">
      {/* Background elements to match Login */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-900/10 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg z-10"
      >
        <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="pt-10 pb-2 text-center relative">
            {/* The Monkey Easter Egg - Positioned at the top */}
            <div className="absolute top-6 right-8 text-2xl transition-all duration-300">
              {isPasswordFocused ? "🙈" : "🐵"}
            </div>
            
            <CardTitle className="text-3xl font-bold text-white tracking-tight">
              Create Account
            </CardTitle>
            <CardDescription className="text-slate-400 text-base">
              Sign up to get started with your portfolio
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit(onSumbit)}
                  className="space-y-5"
                >
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-slate-200 ml-1">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <Input
                        placeholder="John Doe"
                        {...register("fName")}
                        className="h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:ring-orange-500 rounded-xl transition-all"
                      />
                    </div>
                    {errors.fName && <p className="text-xs text-red-400 ml-1">{errors.fName.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-slate-200 ml-1">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        {...register("email")}
                        className="h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:ring-orange-500 rounded-xl transition-all"
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-400 ml-1">{errors.email.message}</p>}
                  </div>

                  {/* Passwords Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-slate-200 ml-1">Password</Label>
                      <Input
                        type="password"
                        placeholder="••••••"
                        onFocus={() => setIsPasswordFocused(true)}
                        {...register("password", { onBlur: () => setIsPasswordFocused(false) })}
                        className="h-12 bg-white/5 border-white/10 text-white focus:ring-orange-500 rounded-xl transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-slate-200 ml-1">Confirm</Label>
                      <Input
                        type="password"
                        placeholder="••••••"
                        onFocus={() => setIsPasswordFocused(true)}
                        {...register("confirmPassword", { onBlur: () => setIsPasswordFocused(false) })}
                        className="h-12 bg-white/5 border-white/10 text-white focus:ring-orange-500 rounded-xl transition-all"
                      />
                    </div>
                  </div>
                  {(errors.password || errors.confirmPassword) && (
                    <p className="text-xs text-red-400 ml-1">
                      {errors.password?.message || errors.confirmPassword?.message}
                    </p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-orange-600 hover:bg-orange-500 text-white font-bold text-base rounded-xl shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <UserPlus size={20} />
                        Create Account
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-slate-500 pt-2">
                    Already have an account?{" "}
                    <Link to="/login" className="text-orange-500 font-bold hover:underline underline-offset-4">
                      Log in
                    </Link>
                  </p>
                </motion.form>
              ) : (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Account Created!</h3>
                  <p className="text-slate-400">Redirecting you to the login page...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
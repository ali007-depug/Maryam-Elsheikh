import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route
        path="login"
        element={
          <AuthProvider>
            <Login />
          </AuthProvider>
        }
      />
      <Route
        path="signup"
        element={
          <AuthProvider>
            <Signup />
          </AuthProvider>
        }
      />
      <Route
        path="dashboard"
        element={
          <>
            <AuthProvider>
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            </AuthProvider>
          </>
        }
      />
      {/* <Route path="*" element={<Navigate to={"/home"} replace />} /> */}
    </Routes>
  );
}

export default App;

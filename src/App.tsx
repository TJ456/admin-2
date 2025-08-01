import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import Calendar from "./pages/Calendar";
import Academics from "./pages/Academics";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import StudentPage from "./pages/OtherPage/Student";
import TeacherPage from "./pages/OtherPage/Teacher";
import UserProfiles from "./pages/UserProfiles";// <-- Make sure this file exists and the casing matches

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("authToken");
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout - Dashboard, Academics, and Student Management for LMS */}
          <Route element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }>
            <Route index path="/" element={<Home />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/students/:deptId" element={<StudentPage />} />
            <Route path="/students" element={<Navigate to="/students/it" replace />} />
            <Route path="/teachers/:deptId" element={<TeacherPage />} />
            <Route path="/teachers" element={<Navigate to="/teachers/it" replace />} />
            <Route path="/profile" element={<UserProfiles />} />
          </Route>
          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

import { Navigate } from "react-router";

interface ProtectedRouteProps {
    children: React.ReactNode;
    roles: string[];
}

const useAuth = () => {
  return {
    isAuthenticated: true,
    user: {
      role: "ADMIN",
    },
  };
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, roles=["ADMIN"] }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

    return <>{children}</>;
};

export default ProtectedRoute;

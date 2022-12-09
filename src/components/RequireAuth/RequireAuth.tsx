import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { RequireAuthProps } from "../../types/types";
import useAuth from "../../hooks/useAuth";

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { AuthRouteProps } from "../../types";

const AuthRoute: React.FC<AuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthCheck();
    return () => AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log('unauthorized');
      navigate('/login');
    }
  });

  if (loading) return <p>Loading...</p>

  return (
    <div className="auth-route">
      {children}
    </div>
  )
}

export default AuthRoute;
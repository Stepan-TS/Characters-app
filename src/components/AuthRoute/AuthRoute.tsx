import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthRoute = (props: any) => {
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

  console.log(children)

  return (
    <div>
      {children}
    </div>
  )
}

export default AuthRoute;
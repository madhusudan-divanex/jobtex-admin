import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { base_url } from '../../baseUrl';
const ProtectedRoute = ({ element: Element }) => {
   const navigate=useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    
    // const token = localStorage.getItem("token");
    const location = useLocation();
    const { token } = location.state;
    useEffect(() => {
        const verifyToken = async () => {
            try {
                if (!token) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }

                const response = await fetch(`${base_url}/verify-token`,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Token:token,
                    },
                });

                const data = await response.json();
                if (data.success) {
                    setIsAuthenticated(true);
                    // navigate('/dashboard')
                } else {
                    console.log(data)
                    setIsAuthenticated(false);
                    localStorage.removeItem("token"); 
                }
            } catch (error) {
                setIsAuthenticated(false);
            }
            setLoading(false);
        };

        verifyToken();
    }, []);
    return isAuthenticated ? <Element /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;

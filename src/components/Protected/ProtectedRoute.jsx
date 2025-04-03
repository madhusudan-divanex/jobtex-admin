import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element }) => {
    const isAuthenticated = localStorage.getItem("token"); // Example: Check auth token

    return isAuthenticated ? <Element /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;

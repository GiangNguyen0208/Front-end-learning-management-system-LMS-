import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRouter() {
    const isLogin = true; // Replace this with your actual login check logic
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            navigate("/login");
        }
    }, [isLogin, navigate]);

    return isLogin ? <Outlet /> : (alert("Người dùng cần đăng nhập để xem"));
}
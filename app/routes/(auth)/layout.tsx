import { Outlet } from "@tanstack/react-router";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <h1>Giriş Yap veya Kayıt Ol</h1>
      <Outlet />
    </div>
  );
}

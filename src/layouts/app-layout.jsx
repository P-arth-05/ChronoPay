// AppLayout.jsx
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-y-hidden">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

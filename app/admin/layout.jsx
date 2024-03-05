import { getUserSession } from "@/utils/getUserSession";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/AdminPage/AdminSideBar";

const AdminLayout = async ({ children }) => {
  const userSession = await getUserSession();

  // console.log(userSession);

  const isAdmin = userSession?.role === "admin";

  if (!isAdmin) return redirect("/");

  return (
    <>
      <AdminSidebar>{children}</AdminSidebar>
    </>
  );
};

export default AdminLayout;

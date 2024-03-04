import { getUserSession } from "@/utils/getUserSession";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }) => {
  const userSession = await getUserSession();

  console.log(userSession);

  const isAdmin = userSession?.role === "admin";

  if (!isAdmin) return redirect("/");

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;

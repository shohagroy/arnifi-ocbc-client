"use client";
import AdminHeader from "@/components/admin/AdminHeader";
import SideBar from "@/components/admin/SideBar";
import InitialLoading from "@/components/loader/InitialLoading";
import { ENUM_USER_ROLE } from "@/constans/userRole";
import { isLoggedIn } from "@/services/auth.service";
import { decodedToken } from "@/utils/jwt";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { Content } = Layout;

const AdminDashboardLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const userLoggedIn = isLoggedIn();
  const tokenInfo = userLoggedIn && decodedToken(userLoggedIn);

  useEffect(() => {
    if (
      (!userLoggedIn && tokenInfo?.role !== ENUM_USER_ROLE.ADMIN) ||
      (!userLoggedIn && tokenInfo?.role !== ENUM_USER_ROLE.SUPER_ADMIN)
    ) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [userLoggedIn, router, tokenInfo]);

  if (!isLoading) {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <InitialLoading />
      </div>
    );
  }

  return (
    <div>
      <Layout hasSider>
        <SideBar />

        <Content
          style={{
            minHeight: "100vh",
            background: "#EEEEEE",
          }}
        >
          <AdminHeader
            role={tokenInfo?.role || "Admin"}
            fullName={tokenInfo?.fullName || "Shohag Roy"}
          />
          <div
            style={{
              padding: "10px",
            }}
          >
            {children}
          </div>
          {/* <Footer className="mt-14">
            <AdminFooter />
          </Footer> */}
        </Content>
      </Layout>
    </div>
  );
};

export default AdminDashboardLayout;

"use client";
import AdminFooter from "@/components/admin/AdminFooter";
import AdminHeader from "@/components/admin/AdminHeader";
import SideBar from "@/components/admin/SideBar";
import InitialLoading from "@/components/loader/InitialLoading";
import { userRole } from "@/constans/userRole";
import { isLoggedIn } from "@/services/auth.service";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/local-storage";
import { Layout } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { Content } = Layout;

const AdminDashboardLayout = ({ children }) => {
  // const router = useRouter();
  // const userLoggedIn = isLoggedIn();
  // const [isLoading, setIsLoading] = useState(false);

  // const token = getFromLocalStorage("accessToken");
  // const tokenInfo = token ? decodedToken(token) : {};

  // const { role, avatar, name } = tokenInfo;

  // useEffect(() => {
  //   if (
  //     (!userLoggedIn && role !== userRole.ADMIN) ||
  //     (!userLoggedIn && role !== userRole.SUPER_ADMIN)
  //   ) {
  //     router.push("/login");
  //   }
  //   setIsLoading(true);
  // }, [router, isLoading, userLoggedIn, role]);

  // if (!isLoading) {
  //   return (
  //     <div style={{ height: "100vh", width: "100%" }}>
  //       <InitialLoading />
  //     </div>
  //   );
  // }

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
          <AdminHeader avatar={""} role={"admin"} name={"Shohag roy"} />
          <div
            style={{
              padding: "10px",
            }}
          >
            {children}
          </div>
          <Footer className="mt-14">
            <AdminFooter />
          </Footer>
        </Content>
      </Layout>
    </div>
  );
};

export default AdminDashboardLayout;

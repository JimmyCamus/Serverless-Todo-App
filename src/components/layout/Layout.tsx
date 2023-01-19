import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hooks";
import { useUser } from "../../lib/contexts/user.context";
import Footer from "./Footer";
import Navigator from "./Navigator";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userContext = useUser();
  const router = useNavigate();
  useAuth(userContext, router, setIsLoading);
  return (
    <div className="font-poppins">
      {isLoading ? (
        <progress className="progress progress-primary w-full"></progress>
      ) : (
        <>
          <Navigator>
            <div className="flex justify-center">
              <div className="w-[90vw] h-[100vh]">{children}</div>
            </div>
            <Footer />
          </Navigator>
        </>
      )}
    </div>
  );
};

export default Layout;

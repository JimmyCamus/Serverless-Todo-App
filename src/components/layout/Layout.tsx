import { ReactNode } from "react";
import Footer from "./Footer";
import Navigator from "./Navigator";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-poppins">
      <Navigator>
        <div className="w-[90vw]">{children}</div>
      </Navigator>
      <Footer />
    </div>
  );
};

export default Layout;

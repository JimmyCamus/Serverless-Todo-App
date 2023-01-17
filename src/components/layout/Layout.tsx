import { ReactNode } from "react";
import Footer from "./Footer";
import Navigator from "./Navigator";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navigator>
        <div className="flex justify-center h-full">
          <div className="w-[90vw]">{children}</div>
        </div>
      </Navigator>
      <Footer />
    </div>
  );
};

export default Layout;

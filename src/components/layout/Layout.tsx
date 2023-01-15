import { ReactNode } from "react";
import Navigator from "./Navigator";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navigator>
        <div className="w-[90vw]">{children}</div>
      </Navigator>
    </div>
  );
};

export default Layout;

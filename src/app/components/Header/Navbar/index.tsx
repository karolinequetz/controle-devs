import React, { ReactNode } from "react";
import Logo from "../Logo";
import * as Styles from "./styles";

interface Props {
  children: ReactNode;
}

const Navbar = ({ children }: Props) => {
  return (
    <>
      <nav className={Styles.navBar()}>
        <div className={Styles.container()}>
          <div className={Styles.header()}>
            <Logo />
            {children}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

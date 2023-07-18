import { NavLink } from "react-router-dom";
import React, { ReactElement } from "react";

type NavbarLinkProps = {
  children: ReactElement | string;
  linkUrl: string;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ linkUrl, children }) => {
  return (
    <NavLink to={linkUrl}>
      {/* Render the children here */}
      {children}
    </NavLink>
  );
};

export default NavbarLink;

// style={({ isActive }) => ({
//   textShadow: isActive && "0 0 0.6px rgb(55, 63, 73)",
// })}

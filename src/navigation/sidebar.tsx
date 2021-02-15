import React, { FC } from "react";
import { NavLink } from "react-router-dom";
// import Album from "@styled-icons/boxicons-regular/Album/Album";

export interface SidebarProps {
    size?: number;
}

const Sidebar: FC<SidebarProps> = () => {
    return (
        <div className="sidenav">
            {/* <Album /> */}
            <NavLink className="side-btn" to="/attributes">
                A
            </NavLink>
            <NavLink className="side-btn" to="/3d">
                3d
            </NavLink>
            <NavLink className="side-btn" to="/rulesEngine">
                RE
            </NavLink>
        </div>
    );
};

export default Sidebar;

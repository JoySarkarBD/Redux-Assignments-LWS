import React from "react";
import SidebarFilter from "./SidebarFilter";
import SidebarSort from "./SidebarSort";

const Sidebar = ({ sort }) => {
  return (
    <aside>
      <div className='sidebar-items'></div>
      <SidebarSort sort={sort} />
      <SidebarFilter />
    </aside>
  );
};

export default Sidebar;

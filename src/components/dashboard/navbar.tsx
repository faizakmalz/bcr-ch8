"use client";

import { Sidebar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path:any) => {
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="h-full px-6 bg-[#0D28A6]">
        <div></div>
        <div></div>
      </div>
      <div className="pl-2">
        <Sidebar aria-label="Sidebar with logo branding example" className="">
          <Sidebar.Logo href="#" img=".">
            Dashboard
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item as="button" onClick={() => handleNavigation('/dashboard')}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item as="button" onClick={() => handleNavigation('/carslist')}>
                Cars
              </Sidebar.Item>
              <Sidebar.Item as="button" onClick={() => handleNavigation('/addcar')}>
                Add Cars
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default Navbar;

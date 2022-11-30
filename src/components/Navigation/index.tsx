import React from "react";
import { ChevronDown, Search } from "react-feather";
import Button from "../atoms/Button";

function Navigation() {
  return (
    <div className="bg-white shadow-main py-[27px] pl-[15px] pr-6 w-full fixed">
      <div className="w-full flex gap-8 items-center">
        <div className="pl-[17px] pr-[21px]">
          <h1 className="font-inter font-bold text-2xl text-primary-200 leading-[29px]">
            E-Learning
          </h1>
        </div>
        <Menu />
        <Toolbar />
      </div>
    </div>
  );
}

export default Navigation;

function Menu() {
  const menuItems = ["courses", "programs", "Learning Pathways", "Partnership"];
  return (
    <nav className="flex">
      {menuItems.map(menu => (
        <MenuItem>{menu}</MenuItem>
      ))}
    </nav>
  );
}

function MenuItem(props: { children?: string }) {
  return (
    <div className="flex">
      <span>{props.children}</span>
      <ChevronDown />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="ml-auto flex items-center">
      <Search className="w-[17px] h-4" />

      <div className="ml-[15px] flex gap-[11px]">
        <Button variant="outline" className="border-black text-black">
          Log In
        </Button>
        <Button className="bg-teal">Sign up</Button>
      </div>
    </div>
  );
}

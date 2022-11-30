import Button from "../atoms/Button";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function Navigation() {
  return (
    <div className="bg-white shadow-main py-[27px] pl-[15px] pr-6 w-full relative z-50 overflow-hidden">
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
    <nav className="flex gap-[30px] items-center">
      {menuItems.map(menu => (
        <div className="flex text-sm leading-4 font-semibold items-center gap-[3.75px]">
          <span>{menu}</span>
          <ChevronDownIcon className="w-[15px] stroke-2" />
        </div>
      ))}
    </nav>
  );
}

function Toolbar() {
  return (
    <div className="ml-auto flex items-center">
      <MagnifyingGlassIcon className="w-[17px] h-4" />

      <div className="ml-[15px] flex gap-[11px]">
        <Button variant="outline" className="border-black text-black">
          Log In
        </Button>
        <Button className="bg-teal">Sign up</Button>
      </div>
    </div>
  );
}

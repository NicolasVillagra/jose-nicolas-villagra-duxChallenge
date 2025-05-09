import { Menubar } from "primereact/menubar";
import ButtonComponent from "../atoms/Button";
import ImagesComponent from "../atoms/Images";

const Navbar = () => {
  const logo = (
    <div className="flex align-items-center">
      <ImagesComponent
        src="/logo.png"
        alt="Logo"
        width={70}
        height={50}
        className="mr-2"
      />
    </div>
  );

  const settingsIcon = (
    <ButtonComponent
      severity="info"
      label={""}
      icon={"pi pi-cog"}
      className={
        "p-button-text bg-blue-500 p-button-rounded text-white text-4xl"
      }
    />
  );

  return (
    <div className="card ">
      <Menubar
        start={logo}
        end={settingsIcon}
        className="shadow-1 !bg-blue-500"
      />
    </div>
  );
};

export default Navbar;

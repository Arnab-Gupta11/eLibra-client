// import { Switch } from "@material-tailwind/react";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div>
      <input className="toggle toggle-success" type="checkbox" onChange={toggleTheme} />
    </div>
  );
};

export default DarkMode;

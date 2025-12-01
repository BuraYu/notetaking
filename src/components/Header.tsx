import logoLight from "../assets/images/logo.svg";
import logoDark from "../assets/images/logo-dark.svg";

const Header = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="px-4 py-3 sm:px-8 sm:py-6 dark:bg-neutral-800 bg-neutral-100 w-full">
      <img
        src={logoDark}
        alt="Logo"
        className="block dark:hidden"
        onClick={toggleDarkMode}
      />
      <img
        src={logoLight}
        alt="Logo"
        className="hidden dark:block"
        onClick={toggleDarkMode}
      />
    </div>
  );
};

export default Header;

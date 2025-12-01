import logoUrl from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div>
      <img src={logoUrl} alt="Logo" className="w-10 h-10" />
      <h1>Header</h1>
    </div>
  );
};

export default Header;

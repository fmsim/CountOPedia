import logo from "../images/react.png";

function Header() {
  return (
    <div className="py-2 pl-1" style={{ borderBottom: "#777" }}>
      <img
        src={logo}
        alt="React logo"
        style={{ height: "35px", verticalAlign: "top" }}
      />
      <span className="h2 m-2 pt-2 text-white-50">CountOPedia</span>
    </div>
  );
}

export default Header;

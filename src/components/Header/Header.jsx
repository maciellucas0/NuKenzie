import "./style.css";
const Header = ({ ChangeFalse }) => {
  return (
    <header>
      <img src={require("./logo2.png")} alt="Logo" />
      <button
        onClick={() => {
          ChangeFalse();
        }}
      >
        Início
      </button>
    </header>
  );
};

export default Header;

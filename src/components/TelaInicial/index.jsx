const TelaInicial = ({ Change }) => {
  return (
    <div className="App-header">
      <div className="containerPrincipal">
        <div className="container">
          <img className="imagem" src={require("./nukenzie.png")} alt="logo" />

          <h1 className="titulo">Centralize o controle de suas finanças</h1>
          <p className="texto">De forma rápida e segura</p>
          <button
            onClick={() => {
              Change();
            }}
            className="iniciar"
          >
            Iniciar
          </button>
        </div>
        <div>
          <img
            className="imagemPrincipal"
            src={require("./imagem.png")}
            alt="fundo"
          />
        </div>
      </div>
    </div>
  );
};
export default TelaInicial;

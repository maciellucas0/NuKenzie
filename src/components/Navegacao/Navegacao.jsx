import "./style.css";
const Navegacao = ({ listTransactions, setListaModificavel }) => {
  function filtrarEntradas() {
    const result = listTransactions.filter((item) => item.type === "Entrada");
    setListaModificavel(result);
  }

  function filtrarDespezas() {
    const result = listTransactions.filter((item) => item.type === "Despeza");
    setListaModificavel(result);
  }

  function mostrarTodos() {
    const result = listTransactions.filter(
      (item) => item.type === "Despeza" && item.type === "Entrada"
    );
    setListaModificavel(result);
  }
  return (
    <>
      <div className="containerNavegacao">
        <h3>Resumo financeiro</h3>
        <div className="navegacaoBotoes">
          <button onClick={() => mostrarTodos()} id="botaoRosa">
            Todos
          </button>
          <button onClick={() => filtrarEntradas()}>Entradas</button>
          <button onClick={() => filtrarDespezas()}>Despesas</button>
        </div>
      </div>
    </>
  );
};

export default Navegacao;

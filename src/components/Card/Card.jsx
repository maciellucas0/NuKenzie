import "./style.css";
const Card = ({
  listTransactions,
  setListTransactions,
  transaction,
  listaModificavel,
  setListaModificavel,
}) => {
  function removerItem() {
    const index = listTransactions.indexOf(transaction);
    const result = listTransactions.filter((_, i) => i !== index);
    setListTransactions(result);

    const indexModificavel = listaModificavel.indexOf(transaction);
    const resultModificavel = listaModificavel.filter(
      (_, i) => i !== indexModificavel
    );

    setListaModificavel(resultModificavel);
  }

  return transaction.type === "Despeza" ? (
    <li>
      <div className="containerListaVermelha">
        <div className="conteudoCard">
          <h2>{transaction.description}</h2>
          <p className="cifrao">$</p>
          <p className="valorDinheiro">{transaction.value}</p>
          <button onClick={removerItem} className="botaoRemover">
            <img alt="trash" src={require("./trash.png")}></img>
          </button>
        </div>
        <p className="tipoTransacao">{transaction.type}</p>
      </div>
    </li>
  ) : (
    <li>
      <div className="containerListaVerde">
        <div className="conteudoCard">
          <h2>{transaction.description}</h2>
          <p className="cifrao">$</p>
          <p className="valorDinheiro">{transaction.value}</p>
          <button onClick={removerItem} className="botaoRemover">
            <img alt="trash" src={require("./trash.png")}></img>
          </button>
        </div>
        <p className="tipoTransacao">{transaction.type}</p>
      </div>
    </li>
  );
};

export default Card;

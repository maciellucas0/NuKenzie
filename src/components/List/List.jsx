import "./style.css";
import Card from "../Card/Card";
const List = ({
  listTransactions,
  setListTransactions,
  listaModificavel,
  setListaModificavel,
}) => {
  return (
    <>
      <ul>
        {listaModificavel.length > 0 ? (
          listaModificavel.map((transaction, index) => (
            <Card
              listaModificavel={listaModificavel}
              setListaModificavel={setListaModificavel}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              transaction={transaction}
              key={index}
            />
          ))
        ) : listTransactions.length <= 0 ? (
          <>
            <h1>Você ainda não possui nenhum lançamento</h1>
            <img
              className="semConteudo"
              src={require("./card.png")}
              alt="card"
            />
            <img
              className="semConteudo"
              src={require("./card.png")}
              alt="card"
            />
            <img
              className="semConteudo"
              src={require("./card.png")}
              alt="card"
            />
          </>
        ) : (
          listTransactions.map((transaction, index) => (
            <Card
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              transaction={transaction}
              key={index}
            />
          ))
        )}
      </ul>
    </>
  );
};

export default List;

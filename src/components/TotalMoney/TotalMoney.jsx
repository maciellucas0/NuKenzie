import "./style.css";
const TotalMoney = ({ listTransactions }) => {
  let result = listTransactions.map((item) => item.value);

  return result.length <= 0 ? (
    <></>
  ) : (
    <div className="containerTotalMoney">
      <div className="tituloSpan">
        <h2 id="total">Valor total:</h2>
        <span id="price">
          $ {result.reduce((acumulador, valorAtual) => valorAtual + acumulador)}
        </span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;

import { useState } from "react";

import "./style.css";
const Form = ({ listTransactions, setListTransactions }) => {
  const [valorInput, setValorInput] = useState("");
  const [valorDinheiro, setValorDinheiro] = useState(0);
  const [tipoValor, setTipoValor] = useState("Entrada");

  function ReceberValorForm(e) {
    e.preventDefault();
    const novoObjeto = {
      description: valorInput,
      type: tipoValor,
      value:
        tipoValor === "Despeza"
          ? parseInt(valorDinheiro) * -1
          : parseInt(valorDinheiro),
    };

    setListTransactions([...listTransactions, novoObjeto]);
  }

  return (
    <>
      <form onSubmit={(event) => ReceberValorForm(event)}>
        <div className="formCima">
          <p>Descrição</p>
          <input
            value={valorInput}
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => {
              setValorInput(event.target.value);
            }}
          ></input>
          <span>Ex: compra de roupas</span>
        </div>
        <div className="formMeio">
          <div className="divValor">
            <p>Valor</p>
            <input
              value={valorDinheiro}
              type="number"
              min="1"
              step="any"
              onChange={(event) => {
                setValorDinheiro(event.target.value);
              }}
            />
            <p id="cifrao">$</p>
          </div>
          <div className="divValor">
            <p>Tipo de valor</p>
            <label>
              <select
                value={tipoValor}
                onChange={(event) => {
                  event.preventDefault();
                  setTipoValor(event.target.value);
                }}
              >
                <option>Entrada</option>
                <option>Despeza</option>
              </select>
            </label>
          </div>
        </div>
        <button type="submit">Inserir Valor</button>
      </form>
    </>
  );
};

export default Form;

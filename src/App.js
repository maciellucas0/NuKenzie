import { useState } from "react";
import List from "./components/List/List";
import TelaInicial from "./components/TelaInicial";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Navegacao from "./components/Navegacao/Navegacao";

import "./App.css";
import TotalMoney from "./components/TotalMoney/TotalMoney";

function App() {
  const [isAtivate, setIsAtivate] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [listaModificavel, setListaModificavel] = useState([]);

  function Change() {
    setIsAtivate(true);
  }

  function ChangeFalse() {
    setIsAtivate(false);
  }

  if (isAtivate) {
    return (
      <>
        <Header ChangeFalse={ChangeFalse} />
        <main>
          <div className="formTotalMoney">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            <TotalMoney listTransactions={listTransactions} />
          </div>
          <div>
            <Navegacao
              listTransactions={listTransactions}
              setListaModificavel={setListaModificavel}
              setListTransactions={setListTransactions}
              listaModificavel={listaModificavel}
            />
            <List
              listaModificavel={listaModificavel}
              setListaModificavel={setListaModificavel}
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
          </div>
        </main>
      </>
    );
  } else {
    return <TelaInicial Change={Change} />;
  }
}

export default App;

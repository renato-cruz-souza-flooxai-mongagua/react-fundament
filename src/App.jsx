import React from "react";

import Card from "./components/layout/Card";
import Aleatorio2 from "./components/basic/Aleatorio2";
import Primeiro from './components/basic/Primeiro';
import ComParametro from './components/basic/ComParametro';
import Fragmento from './components/basic/Fragmento';

export default () =>

    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="#04 - exemplo de Card">
            <Aleatorio2 min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com parâmetro">
            <ComParametro
                titulo="Situação do aluno"
                aluno="Livia M. Marqui"
                nota={9.9} />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
             <Primeiro></Primeiro>
        </Card>

       

    </div>


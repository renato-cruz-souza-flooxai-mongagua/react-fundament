import './App.css';
import React from "react";

import Card from "./components/layout/Card";

import Input from './components/Formulario/Input';
import IndiretaPai from './components/Comunicacao/IndiretaPai';
import DiretaPai from './components/Comunicacao/DiretaPai';
import "./components/Comunicacao/DiretaPai"
import UsuarioInfo from './components/repeticao/condicional/UsuarioInfo';
import ParOuImpar from './components/repeticao/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basic/Familia';
import FamiliaMembro from './components/basic/FamiliaMembro';
import Aleatorio2 from "./components/basic/Aleatorio2";
import Primeiro from './components/basic/Primeiro';

import ComParametro from './components/basic/ComParametro';
import Fragmento from './components/basic/Fragmento';


export default () =>

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#11 - Componente Controlado (input)" color="982395">
                <Input></Input>
           
            </Card>

            <Card titulo="#10 - Comunicação indireta" color="982395">
                <IndiretaPai></IndiretaPai>
           
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="982395">
                <DiretaPai></DiretaPai>
           
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="982395">
              <ParOuImpar numero={21}></ParOuImpar>
              <UsuarioInfo usuario={{ nome: 'Renato' }}/>
              <UsuarioInfo usuario={{ }}/>
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="3A9AD9">
              <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="FF4C65">
               <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componentes com Filhos" color="#00CBFB">
                <Familia sobrenome="Souza">
                    <FamiliaMembro nome="Renato"/>
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Dasafio Aleatorio" color="#FA6900">
                <Aleatorio2 min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6f">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Livia M. Marqui"
                    nota={9.9} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C7">
                <Primeiro></Primeiro>
            </Card>


        </div>




    </div>


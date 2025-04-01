import React from "react";


export default props => {
    const cb = props.quandoClicar
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * ((20) + 50))
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={e => {
                cb("João", gerarIdade(), true)
            }}>Fornecer Informações
            </button>
        </div>
    )
}
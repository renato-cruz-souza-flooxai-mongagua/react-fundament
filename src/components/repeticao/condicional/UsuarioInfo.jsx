import React from "react";


export default props => {
    const usuario = props.usuario || {};

    return (
        <div>
            {usuario && usuario.nome && (
                <div>
                    Seja bem-vindo <strong>{usuario.nome}</strong>!
                </div>
            )}
            {!usuario || !usuario.nome && (
                <div>
                    Seja bem-vindo <strong>Amigão</strong>!
                </div>
            )}
        </div>
    );
};
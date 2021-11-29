import React, { Component } from "react";

class FormCadastro extends Component{
    render(){
        return(
            <form>
            <input type="text" placeholder="Titulo"/>
            <textarea placeholder="Escreva aqui"/>
            <button>Criar</button>
          </form>
        );
    }
}
export default FormCadastro;
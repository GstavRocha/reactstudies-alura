import React, {Component} from "react";
import CardNota from "./CardNota";

 class ListadeNotas extends Component{
    render(){
        return(
            <ul>{                
            /* Tudo que estiver dentro de{} será interpretado como Js 
            Para chamar os elementos eu criei um Arrey e para pecorrer os elementos
            eu chamei .map()
            
            Para chamar uma categoria será <div> {categoria}</div>.
            */
                Array.of("Trabalho","Trabalho","Estudos","Teste").map((categorias) =>{
                    return(
                        <li>
                            <div>{categorias}</div>
                            <CardNota/>
                        </li>
                    );
                })}
            </ul>
            );
              
        }

}
export default ListadeNotas;
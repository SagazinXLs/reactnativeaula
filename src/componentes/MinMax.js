import React from "react";
import {Text} from 'react-native'
import Estilo from "./Estilo";
import Aleatorio from "./Aleatorio";




export default props =>{ 
// console.warn(param)
    return (
        <Text style={Estilo.txtGrande}>
            O Valor {props.max} é Maior que o {props.min}
        </Text>
        ) 

}
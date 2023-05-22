import React, {useState} from 'react';
import {Text} from 'react-native';
import Estilo from '../Estilo';
import Filho2 from './Filho2';


export default props => {
    const [num, setNum] = useState(0)
    function exibirValor(numero){
        setNum(numero)
        
    }

    return (
      <>
        <Text style={Estilo.txtGrande}>{num}</Text>
        <Filho2
            min={1}
            max={60}
            funcao={exibirValor} 
        /> 

      </>

    )
}
import React from 'react';
import { Text, View } from 'react-native';

function gerarNumeroAleatorio(mino, maxo) {
  return Math.floor(Math.random() * (maxo - mino + 1)) + mino;
}

const Aleatorio = ({ mino, maxo }) => {
  const numeroAleatorio = gerarNumeroAleatorio(mino, maxo);

  return (
    <View>
      <Text>Número Aleatório: {numeroAleatorio}</Text>
    </View>
  );
};

export default Aleatorio;


// import React from "react";
// import {Text} from 'react-native'



// export default props => {

// function gerarNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   // Exemplo de uso
//   console.log(gerarNumeroAleatorio(1, 10)); // Gera um número aleatório entre 1 e 10 (inclusive)

// }
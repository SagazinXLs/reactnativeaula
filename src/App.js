import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import AtividadeSemana from './componentes/AtividadeSemana'
// import Pai from './componentes/direta/Pai'
// import Pai2 from './componentes/indireta/Pai2'
// import ContadorDisplay from './Contador/ContadorDisplay'
// import ContadorV2 from './Contador/ContadorV2'
//import HomeScreen from './componentes/HomeScreens'
// import DetailsScreen from './componentes/DetailsScreen'

// import Aleatorio from './componentes/Aleatorio'
// import ContadorV2 from './Contador/ContadorV2'
// import ExTelasScreen from './componentes/ExTelasScreen'
// import ExTelasScreen2 from './componentes/ExTelasScreen2'


import Familia from './componentes/relacao/Familia'
import Membro from './componentes/relacao/Membro'
import { SafeAreaView } from 'react-native-safe-area-context'


const Stack = createNativeStackNavigator()

export default () => (

        <SafeAreaView style={styles.TelaIniciante}>

        <Familia>

            <Membro nome="Ednaldo" sobrenome="Pereira"/>
            <Membro nome="Suellen" sobrenome="Pereira"/>
            <Membro nome="Jorlan" sobrenome="Pereira"/>
            <Membro nome="Muzy" sobrenome="Pereira"/>

        </Familia>

        <Familia>

            <Membro nome="Bak" sobrenome="Loud"/>
            <Membro nome="Lzin" sobrenome="Loud"/>
            <Membro nome="Jordan" sobrenome="Loud"/>
            <Membro nome="Thurzin" sobrenome="Loud"/>

        </Familia>

        </SafeAreaView>



        // <NavigationContainer>

        //     <Stack.Navigator>

        //         <Stack.Screen name="ExTelasScreen" component={ExTelasScreen}/>
        //         <Stack.Screen name="ExTelasScreen2" component={ExTelasScreen2}/>


        //         <Stack.Screen name="Aleatorio" component={Aleatorio}/>
        //         <Stack.Screen name="ContadorV2" component={ContadorV2}/>
                


        //     </Stack.Navigator>

        // </NavigationContainer>




)


const styles = StyleSheet.create({
    TelaIniciante: {

        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
    } 

})







// lista de comentarios

// function App(){
//     const jsx = <Text>Walison Dantas</Text>
//     return jsx
// }


// const App = function () {
//     return <Text>Componente 2</Text>
// }


// export default function() {
//     return <Text>Walison Dantas</Text>
// }



// export default () => {
//     return <Text>Walison Dantas</Text>
// }


// export default App


    {/* <Primeiro/>
        <Text>1 + 2</Text>
       <Text>O valor da soma de 1 + 2 = {1+2}</Text>
       <Comp1/>
       <Comp2/> 
       <Of/>    */} 

     {/* <Contador inicial={100}/> */}
       

          {/* <MinMax min="3" max="20"/>
       <MinMax min="5" max="40"/>
       <MinMax min="7" max="55"/>

        <Aleatorio mino={3} maxo={20} />
        <Aleatorio mino={5} maxo={40} />
        <Aleatorio mino={7} maxo={55} /> */}


            
    // <View style={styles.TelaIniciante}>

    // {/* <AtividadeSemana /> */}
        
    // // {/* <Pai /> */}
    
    // {/* <Pai2 /> */}

    // {/* <ContadorDisplay /> */}
    
    // {/* <ContadorV2 /> */}

    // {/* </View> */}


        // import Primeiro from './componentes/Primeiro'
// import Of, {Comp1, Comp2} from './componentes/MultiplosComponentes'
// import MinMax from './componentes/MinMax'
// import Aleatorio from './componentes/Aleatorio'
// import Titulo from './componentes/Titulo'
//import Botao from './componentes/Botao'
// import Contador from './componentes/Contador'
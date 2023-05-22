import React from "react";
import {Button} from "react-native"

export default props => {
    function executar() {
        console.warn("Está executando o botão numero 1")
    }
    return (
        <>
        <Button
            title="Botão numero 1"
            onPress={executar}
        />
        <Button
            title="Botão numero 2"
            onPress={() => {
            console.warn("Está executando o botão numero 2!!!")
    }}/>

        <Button
            title="Botão numero 3"
            onPress={() => {
            console.warn("Está executando o botão numero 3!!!")
    }}/>
    


    </>

    )
}

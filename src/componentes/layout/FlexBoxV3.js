import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    const lado = 40
    return (

        <View style={styles.FlexV3}>
            <Quadrado cor="#05f5a5"/>
            <Quadrado cor='#836FFF'/>
            <Quadrado cor='#272FFF'/>
            <Quadrado cor='#ebcFFF'/>
            <Quadrado cor='#ef3444'/>
        </View>

    )
}

const styles = StyleSheet.create({

    FlexV3: {
        flexDirection: "row",
        height: 350,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'

    }
})


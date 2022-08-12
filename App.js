import React, {useState} from 'react';

import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    StatusBar
} from 'react-native';

const App = () => {

    const defaultColor = "rgb(0,0,0)";
    const [randomColor, setRandomColor] = useState(defaultColor);

    const changeBackground = () => {
        let color = "rgb("+
            Math.floor(Math.random() * 256)+
            ","+
            Math.floor(Math.random() * 256)+
            ","+
            Math.floor(Math.random() * 256)+
            ")";
        setRandomColor(color);
    }

    const resetBackground = () => {
        
        setRandomColor(defaultColor);
    }

    return(
        <>
            <StatusBar backgroundColor={randomColor}/>
            <View style={[styles.container, {backgroundColor: randomColor}]}>
                <TouchableOpacity style={styles.button} onPress={changeBackground}>
                    <Text style={styles.text}>{randomColor}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={resetBackground}>
                    <Text style={styles.text}>Reset</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        backgroundColor: "#BB2CD9",
        paddingVertical: 10, 
        paddingHorizontal: 40,
        color: "#FFFFFF",
        borderRadius: 15,
        textTransform: "uppercase",
        textAlign: 'center',
    },
    button: {
        marginTop: 10,
    }
});
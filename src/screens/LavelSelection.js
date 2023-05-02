import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";

export default function LavelSelection({onCancel, isVisible, onLevelSelected}){
    return (

        <TouchableOpacity style={styles.modal} onPress={onCancel} >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nivel</Text>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]} onPress={() => onLevelSelected(0.1)}>
                        <Text style={styles.buttonLevel}>Fácil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.bgNormal]} onPress={() => onLevelSelected(0.2)}>
                        <Text style={styles.buttonLevel}>Intermediario</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.bgHard]} onPress={() => onLevelSelected(0.3)}>
                        <Text style={styles.buttonLevel}>Difícil</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    frame: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6",
    },

    container: {
        backgroundColor: "#EEE",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
    },

    button: {
        marginTop: 10,
        padding: 5,
    },

    buttonLevel: {
        fontSize: 20,
        color: "#EEE",
        fontWeight: "bold",
    },

    bgEasy: {
        backgroundColor: "#49B65D",
    },

    bgNormal: {
        backgroundColor: "#2765F7",
    },

    bgHard:{
        backgroundColor: "#F26337",
    }
})
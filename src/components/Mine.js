import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Mine(){
    return(
        <View style={styles.container}>
           <MaterialCommunityIcons name="mine" size={22} color="black" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    }
})
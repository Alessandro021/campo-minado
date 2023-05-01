import { View, StyleSheet } from "react-native";
import Field from "./Field";

export default function MineField({board}){
    const rows = board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c}/>
        }) 
        return <View key={r}>{columns}</View>
    })

    return <View style={{flexDirection: "row"}}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        backgroundColor: "#EEE",
    }
})

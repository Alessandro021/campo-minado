import { View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Flag({bigger}){
    return (
        <View>
            <MaterialIcons name="flag" size={bigger ? 30 : 20} color="black" />
        </View>
    )
}
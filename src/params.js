import { Dimensions } from "react-native";

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //PROPORÇÂO DO PAINEL SUPERIOR NA TELA
    dificultLavel: 0.1,
    getRowsAmount(){ //QUANTIDADES DE COLUNAS
        const width = Dimensions.get("window").width
        return Math.floor(width / this.blockSize)
    },

     getColumnsAmount(){ //QUANTIDADES DE LINHAS
        const height = Dimensions.get("window").height
        const boardHeight = height * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params
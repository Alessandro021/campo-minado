import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import { createMineBoard } from './src/logica';


export default function App() {

  const [board, setBoard] = useState([]);

  function minesAmount(){
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.dificultLavel)
  }

  useEffect(() => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    setBoard(createMineBoard(rows, cols, minesAmount));
  }, []);



  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.welcome}>Iniciando o Campo Minado</Text>

      <Text style={styles.getRowsAmount}>
        {params.getRowsAmount()} X {params.getColumnsAmount()}
      </Text>

      <View style={styles.board}>

        <MineField board={board}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA"
  }
});

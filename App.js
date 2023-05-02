import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, StatusBar, Alert, Modal } from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import { createMineBoard, cloneBoard, hadExplosion, openField, showMines, wonGame, invertFlag, flagsUsed} from './src/logica';
import Header from './src/components/Header';
import LavelSelection from './src/screens/LavelSelection';

export default function App() {

  const [board, setBoard] = useState([]);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [showLevelSelection, setShowLevelSelection] = useState(false)

  function minesAmount(){
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.dificultLavel)
  }

  function criarNovaMina(){
    const rows = params.getRowsAmount();
  const cols = params.getColumnsAmount();

  setBoard(createMineBoard(rows, cols, minesAmount()));
  setLost(false)
  setWon(false)
  setShowLevelSelection(false)
  }

  useEffect(() => {
    
    criarNovaMina()
  }, []);



  function onOpenField(row, column){
    const newboard = cloneBoard(board)
    openField(newboard, row, column)
    const lost = hadExplosion(newboard)
    const won = wonGame(newboard)

    if(lost){
      showMines(newboard)
      Alert.alert("Perdeeeeu", )
    }

    if(won){
      Alert.alert("Parabens", "Você venceu")
    }

    setBoard(newboard)
    setWon(won)
    setLost(lost)
  }

  function onSelectField(row, column){
    const newboard = cloneBoard(board)
    invertFlag(newboard, row, column)
    const won = wonGame(newboard)

    if(won){
      Alert.alert("Parabens, Você vencu!!!")
    }

    setBoard(newboard)
    setWon(won)
  }

  function onLevelSelected(lavel){
    params.dificultLavel = lavel
    criarNovaMina()
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Modal visible={showLevelSelection} animationType="slide" transparent={true} onRequestClose={() => setShowLevelSelection(false)} onDismiss={() => setShowLevelSelection(false)}>
          <LavelSelection 
          onLevelSelected={onLevelSelected} 
          onCancel={() => setShowLevelSelection(false)}/>
      </Modal>
      

      <Header onNewGame={() => criarNovaMina()} flagsLeft={minesAmount() - flagsUsed(board)} onFlagPress={() => setShowLevelSelection(true)} />

      <View style={styles.board}>

        <MineField board={board} onOpenField={onOpenField} onSelectField={onSelectField}/>
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

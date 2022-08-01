import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Pressable
} from 'react-native';
import { useState } from 'react';
import colors from '../../theme/colors';

const { width, height } = Dimensions.get('window');

const Keyboard = ({ keyReturn, deleteKey, showKeyBoard, enterKey }) => {
  const [modalVisible, setModalVisible] = useState(showKeyBoard);

  const onPress = key => {
    keyReturn(key);
  };

  const keyDelete = () => {
    deleteKey();
  };

  const keyEnter = () => {
    enterKey();
  };

  return (
    <View
      style={[styles.centeredView, { display: showKeyBoard ? 'flex' : 'none' }]}
    >
      <View style={styles.modalView}>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('1')}
        >
          <Text style={styles.textStyle}>1</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('2')}
        >
          <Text style={styles.textStyle}>2</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('3')}
        >
          <Text style={styles.textStyle}>3</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('4')}
        >
          <Text style={styles.textStyle}>4</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('5')}
        >
          <Text style={styles.textStyle}>5</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('6')}
        >
          <Text style={styles.textStyle}>6</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('7')}
        >
          <Text style={styles.textStyle}>7</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('8')}
        >
          <Text style={styles.textStyle}>8</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('9')}
        >
          <Text style={styles.textStyle}>9</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('0')}
        >
          <Text style={styles.textStyle}>0</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => onPress('00')}
        >
          <Text style={styles.textStyle}>00</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={keyDelete}
        >
          <Text style={styles.textStyle}>Delete</Text>
        </Pressable>
        <Pressable style={[styles.buttonEnter]} onPress={keyEnter}>
          <Text style={styles.textStyle}>Enter</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    top: 30,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    width: 326,
    height: 430,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: colors.primary,
    padding: 2,
    borderWidth: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    width: 100,
    height: 80,
    borderRadius: 10,
    margin: 1,
    elevation: 2,
    justifyContent: 'center'
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  buttonEnter: {
    width: '99%',
    marginBottom: 0,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#2196F3',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});
export default Keyboard;

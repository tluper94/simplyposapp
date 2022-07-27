import { useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OrderView from './components/orderView/OrderView';
import Navbar from './components/navbar/Navbar';
import colors from './theme/colors';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const getNavHeight = e => {
    setNavHeight(e.nativeEvent.layout.height);
  };

  const getScreenInfo = async () => {
    const screenHeight = Dimensions.get('window').height;
    // const getOrientation = await ScreenOrientation.getOrientationLockAsync();
    // console.log(getOrientation);
    setScreenHeight(screenHeight);
    // setOrientation(getOrientation);
  };

  return (
    <Provider store={store}>
      <View onLayout={getScreenInfo} style={styles.App}>
        <Navbar getNavHeight={getNavHeight} />
        <OrderView navHeight={navHeight} screenHeight={screenHeight} />
        <StatusBar style="light" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: colors.black,
    height: '100%',
    flexDirection: 'column'
  }
});

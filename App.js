import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from './libs/TailwindConfig';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';
import colors from './theme/colors';
import useScreenOrientation from './hooks/useScreenOrientaition';
import SquareBtn from './components/squareBtn/SquareBtn';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const orientation = useScreenOrientation();

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

  const OrderView = () => (
    <View style={styles.orderViewContainer(navHeight, screenHeight)}>
      <View style={{ width: '37%', marginRight: '.2%' }}>
        <Cart />
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <SquareBtn
            width="19%"
            height={'90%'}
            icon={
              <Material
                name="note-search-outline"
                color={colors.white}
                size={screenHeight * 0.08}
              />
            }
            color={colors.primary}
            style={{ marginRight: '1%' }}
          />
          <SquareBtn
            width="19%"
            height={'90%'}
            icon={
              <AntDesign
                name="printer"
                color={colors.white}
                size={screenHeight * 0.08}
              />
            }
            color={colors.primary}
            style={{ marginRight: '1%' }}
          />
          <SquareBtn
            width="19%"
            height={'90%'}
            icon={
              <Entypo
                name="dots-three-horizontal"
                color={colors.white}
                size={screenHeight * 0.08}
              />
            }
            color={colors.primary}
            style={{ marginRight: '1%' }}
          />
          <SquareBtn
            width="19%"
            height={'90%'}
            icon={
              <FontAwsome
                name="dollar"
                color={colors.white}
                size={screenHeight * 0.08}
              />
            }
            color={colors.primary}
            style={{ marginRight: '1%' }}
          />
          <SquareBtn
            width="19%"
            icon={
              <AntDesign
                name="checksquareo"
                color={colors.white}
                size={screenHeight * 0.08}
              />
            }
            height={'90%'}
            color={colors.primary}
            style={{ marginRight: '1%' }}
          />
        </View>
      </View>
      <View style={styles.categoryContainer}></View>
      <View style={styles.menuItemsContainer}></View>
    </View>
  );

  return (
    <View onLayout={getScreenInfo} style={styles.App}>
      <Navbar getNavHeight={getNavHeight} />
      <OrderView />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    backgroundColor: colors.black,
    height: '100%',
    flexDirection: 'column'
  },
  orderViewContainer: (navHeight, screenHeight) => ({
    flexDirection: 'row',
    height: screenHeight - navHeight,
    width: '100%'
  }),
  categoryContainer: {
    height: '100%',
    width: '17%',
    backgroundColor: colors.darkGrey,
    marginRight: '.2%',
    borderWidth: 1,
    borderRadius: 18
  },
  menuItemsContainer: {
    flex: 1,
    backgroundColor: colors.darkGrey,
    borderWidth: 1,
    borderRadius: 18
  }
});

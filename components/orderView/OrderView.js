import { View, StyleSheet, ScrollView } from 'react-native';
import SquareBtn from '../squareBtn/SquareBtn';
import Cart from '../cart/Cart';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';
import MenuCategories from '../menuCategories/MenuCategories';
import MenuItems from '../menuItems/MenuItems';
import CartModal from '../cartModal/CartModal';
import { useRef, useState } from 'react';

const OrderView = ({ navHeight, screenHeight }) => {
  const [cartHeight, setCartHeight] = useState(0);
  const getInitCartHeight = e => {
    setCartHeight(e.nativeEvent.layout.height);
  };

  console.log(cartHeight);
  return (
    <View style={styles.orderViewContainer(navHeight, screenHeight)}>
      <View
        onLayout={getInitCartHeight}
        style={{ height: '40%', width: '100%' }}
      />
      <Cart />
      <View
        style={{
          flexDirection: 'row',
          height: screenHeight - navHeight - cartHeight
        }}
      >
        <View style={styles.buttonsContainer}>
          <SquareBtn
            width="90%"
            height="18%"
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
            width="90%"
            height={'18%'}
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
            width="90%"
            height={'18%'}
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
            width="90%"
            height={'18%'}
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
            width="90%"
            icon={
              <AntDesign
                name="checksquareo"
                color={colors.white}
                size={screenHeight * 0.08}
              />
            }
            height={'18%'}
            color={colors.primary}
            style={{ marginRight: '1%' }}
          />
        </View>
        <View style={styles.categoryContainer}>
          <View style={{ height: '100%' }}>
            <MenuCategories />
          </View>
        </View>
        <View style={styles.menuItemsContainer}>
          <MenuItems />
        </View>
      </View>
    </View>
  );
};

export default OrderView;

const styles = StyleSheet.create({
  orderViewContainer: (navHeight, screenHeight) => ({
    flexDirection: 'column',
    height: screenHeight - navHeight,
    width: '100%'
  }),
  buttonsContainer: {
    padding: 5,
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.darkGrey,
    marginRight: '.2%',
    borderWidth: 1,
    borderRadius: 18,
    zIndex: 1
  },
  categoryContainer: {
    width: '15%',
    height: '100%',
    backgroundColor: colors.darkGrey,
    marginRight: '.2%',
    borderWidth: 1,
    borderRadius: 18,
    zIndex: 1
  },
  menuItemsContainer: {
    flex: 3,
    backgroundColor: colors.darkGrey,
    borderWidth: 1,
    borderRadius: 18
  }
});

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

const OrderView = ({ navHeight, screenHeight }) => (
  <View style={styles.orderViewContainer(navHeight, screenHeight)}>
    <CartModal />
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
    <View style={styles.categoryContainer}>
      <View style={{ height: '100%' }}>
        <MenuCategories />
      </View>
    </View>
    <View style={styles.menuItemsContainer}>
      <MenuItems />
    </View>
  </View>
);

export default OrderView;

const styles = StyleSheet.create({
  orderViewContainer: (navHeight, screenHeight) => ({
    flexDirection: 'row',
    height: screenHeight - navHeight,
    width: '100%'
  }),
  categoryContainer: {
    flex: 1,
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

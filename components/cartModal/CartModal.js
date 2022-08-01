import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable
} from 'react-native';
import colors from '../../theme/colors';
import { useState, useEffect, useRef } from 'react';

const screenHeight = Dimensions.get('window').height;

const CartModal = () => {
  const cartRef = useRef();
  const [cartWidth, setCartWidth] = useState(0);
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const renderItem = ({ item }) => <Item {...item} />;

  const scrollToBottom = () => {
    cartRef.current.scrollToEnd({ animating: true });
  };

  return (
    <View onLayout={getCartWidth} style={styles.cartContainer}>
      <View style={styles.topLabelsContainer}>{displayTopLabels()}</View>
      <View style={styles.cartView}>
        <View style={{ height: '100%' }}>
          <FlatList
            ref={cartRef}
            onContentSizeChange={scrollToBottom}
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <View style={styles.cartFooter}>
        <View style={styles.cartLabelContainer}>
          <Text style={styles.cartLabel}>Total:</Text>
          <Text style={styles.cartLabelAmount}>
            ${getCartTotal().total.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    width: '100%',
    height: '88%',
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderRadius: 18,
    paddingLeft: '1%',
    paddingRight: '1%',
    paddingTop: '.09%',
    paddingBottom: '1%',
    marginRight: '.2%'
  },
  cartView: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.white
  },
  cartFooter: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderBottomEndRadius: 18,
    borderBottomStartRadius: 18
  },
  cartLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%'
  },
  cartLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginRight: '1%'
  },
  cartLabelAmount: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: '1%'
  },
  orderNavContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row'
  },
  topLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  labelContainer: {
    flexDirection: 'row'
  },
  topLabel: {
    color: colors.white,
    fontSize: 20
  }
});

export default CartModal;

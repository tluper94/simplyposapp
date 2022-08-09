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

import { Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  modifyQuantity,
  displayCartModal,
  selectItem
} from '../../features/cart/cartSlice';
import Keyboard from '../keyboard/Keyboard';
import CartModal from '../cartModal/CartModal';

const screenHeight = Dimensions.get('window').height;

const Cart = () => {
  const cartRef = useRef();
  const [cartWidth, setCartWidth] = useState(0);
  const { cartItems, isVisable } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const getCartWidth = e => {
    setCartWidth(e.nativeEvent.layout.width);
  };

  const displayTopLabels = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-end',
          paddingLeft: cartWidth * 0.02
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: '10%',
            width: '100%'
          }}
        >
          <View
            style={{
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}
          >
            <Text style={styles.topLabel}>Price</Text>
          </View>
          <View
            style={{
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}
          >
            <Text style={styles.topLabel}>Qty</Text>
          </View>
          <View
            style={{
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <Text style={styles.topLabel}>Subtotal</Text>
          </View>
          <View
            style={{
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}
          >
            <Text style={styles.topLabel}>Discount</Text>
          </View>
        </View>
      </View>
    );
  };

  const getCartTotal = () => {
    const taxRate = 0.0625;
    const subTotal = cartItems
      .map(({ price, quantity }) => price * quantity)
      .reduce((prev, curr) => prev + curr, 0);
    const taxes = subTotal * taxRate;
    const total = subTotal + taxes;
    return {
      subTotal,
      total,
      taxes
    };
  };

  const Item = ({ item, price, quantity, id, index }) => {
    return (
      <Pressable
        onPress={() => onShowPress(index)}
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#a5a5a5',
          height: screenHeight * 0.07,
          paddingTop: screenHeight * 0.01,
          paddingLeft: cartWidth * 0.02
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: '10%',
            width: '100%'
          }}
        >
          <Text
            style={{ fontWeight: '300', fontSize: 18, marginRight: 'auto' }}
          >
            {item}
          </Text>
          <View
            style={{
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}
          >
            <Text style={{ fontSize: 18 }}>${price}</Text>
          </View>
          <View
            style={{
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}
          >
            <Text style={{ fontSize: 18 }}>{quantity}</Text>
          </View>
          <View
            style={{
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <Text style={{ fontSize: 18 }}>
              ${(price * quantity).toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              width: '15%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}
          >
            <Text style={{ fontSize: 18 }}>{0}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const renderItem = ({ item, index }) => <Item {...item} index={index} />;

  const scrollToBottom = () => {
    cartRef.current.scrollToEnd({ animating: true });
  };

  const onShowPress = index => {
    dispatch(displayCartModal());
    dispatch(selectItem(index));
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
          <Text style={styles.cartLabel}>Subtotal:</Text>
          <Text style={styles.cartLabelAmount}>
            ${getCartTotal().subTotal.toFixed(2)}
          </Text>
        </View>
        <View style={styles.cartLabelContainer}>
          <Text style={styles.cartLabel}>Taxes:</Text>
          <Text style={styles.cartLabelAmount}>
            ${getCartTotal().taxes.toFixed(2)}
          </Text>
        </View>
        <View style={styles.cartLabelContainer}>
          <Text style={styles.cartLabel}>Total:</Text>
          <Text style={styles.cartLabelAmount}>
            ${getCartTotal().total.toFixed(2)}
          </Text>
        </View>
        <View style={styles.cartLabelContainer}>
          <Text style={styles.cartLabel}>Discount:</Text>
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
    position: 'absolute',
    width: '100%',
    height: '40%',
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderRadius: 18,
    paddingLeft: '.8%',
    paddingRight: '.8%',
    paddingTop: '.09%',
    paddingBottom: '.8%',
    marginRight: '.2%',
    zIndex: 99
  },
  cartView: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.white
  },
  cartFooter: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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

export default Cart;

import { View, Text, StyleSheet, FlatList } from 'react-native';
import colors from '../../theme/colors';
import { useState, useEffect } from 'react';

import { Dimensions } from 'react-native';

import { cartData } from '../../mockData';

const screenHeight = Dimensions.get('window').height;

const Cart = () => {
  const [cartWidth, setCartWidth] = useState(0);

  const getCartWidth = e => {
    setCartWidth(e.nativeEvent.layout.width);
  };

  const displayTopLabels = () => {
    return (
      <View style={{ flexDirection: 'row', marginRight: cartWidth * 0.1 }}>
        <View
          style={{
            width: cartWidth * 0.2,
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: cartWidth * 0.07
          }}
        >
          <Text style={styles.topLabel}>Qty</Text>
        </View>
        <View
          style={{
            width: cartWidth * 0.2,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Text style={styles.topLabel}>Subtotal</Text>
        </View>
      </View>
    );
  };

  const getCartTotal = () => {
    const taxRate = 0.0625;
    const subTotal = cartData
      .map(({ price, quantity }) => price * quantity)
      .reduce((prev, curr) => prev + curr);
    const taxes = subTotal * taxRate;
    const total = subTotal + taxes;
    return {
      subTotal,
      total,
      taxes
    };
  };

  const Item = ({ item, price, quantity }) => {
    return (
      <View
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
            width: '100%'
          }}
        >
          <Text
            style={{ fontWeight: '300', fontSize: 18, marginRight: 'auto' }}
          >
            {item}
          </Text>
          <View style={{ flexDirection: 'row', marginRight: cartWidth * 0.1 }}>
            <View
              style={{
                width: cartWidth * 0.2,
                flexDirection: 'row',
                justifyContent: 'center',
                marginRight: cartWidth * 0.07
              }}
            >
              <Text style={{ fontSize: 18 }}>{quantity}</Text>
            </View>
            <View
              style={{
                width: cartWidth * 0.2,
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Text style={{ fontSize: 18 }}>
                ${(price * quantity).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <View onLayout={getCartWidth} style={styles.cartContainer}>
      <View style={styles.topLabelsContainer}>{displayTopLabels()}</View>
      <View style={styles.cartView}>
        <View style={{ height: '100%' }}>
          <FlatList
            data={cartData}
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

export default Cart;

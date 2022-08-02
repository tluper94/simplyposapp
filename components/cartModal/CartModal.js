import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Dimensions,
  Modal
} from 'react-native';
import colors from '../../theme/colors';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  modifyQuantity,
  displayCartModal,
  selectItem
} from '../../features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { BlurView } from 'expo-blur';

const screenHeight = Dimensions.get('window').height;

const CartModal = () => {
  const cartRef = useRef();
  const [cartWidth, setCartWidth] = useState(0);
  const { cartItems, isVisable, selectedItem } = useSelector(
    state => state.cart
  );
  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState(0);

  const getCartWidth = e => {
    setCartWidth(e.nativeEvent.layout.width);
  };

  const displayTopLabels = () => {
    return (
      <View style={{ flexDirection: 'row', marginRight: cartWidth * 0.1 }}>
        <View
          style={{
            width: cartWidth * 0.1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: cartWidth * 0.002
          }}
        >
          <Text style={styles.topLabel}>Price</Text>
        </View>
        <View
          style={{
            width: cartWidth * 0.15,
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: cartWidth * 0.002
          }}
        >
          <Text style={styles.topLabel}>Qty</Text>
        </View>
        <View
          style={{
            width: cartWidth * 0.15,
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: cartWidth * 0.002
          }}
        >
          <Text style={styles.topLabel}>Subtotal</Text>
        </View>
        <View
          style={{
            width: cartWidth * 0.15,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Text style={styles.topLabel}>Balance</Text>
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
    const isSelected = id === selectedId ? true : false;

    const onSelectItem = index => {
      setSelectedId(id);
    };
    return (
      <Pressable
        onPress={() => onSelectItem(index)}
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#a5a5a5',
          height: isSelected ? screenHeight * 0.1 : screenHeight * 0.07,
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
            style={{
              fontWeight: '300',
              fontSize: isSelected ? 22 : 18,
              fontWeight: isSelected && '500',
              marginRight: 'auto'
            }}
          >
            {item}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: cartWidth * 0.1
            }}
          >
            <View
              style={{
                width: cartWidth * 0.1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start'
                // marginRight: cartWidth * 0.002
              }}
            >
              <View
                style={{
                  backgroundColor: isSelected && colors.lightGrey,
                  borderRadius: 5,
                  padding: 2
                }}
              >
                <Text
                  style={{
                    fontSize: isSelected ? 22 : 18,
                    fontWeight: isSelected && '500'
                  }}
                >
                  ${price}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: cartWidth * 0.15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start'
                // marginRight: cartWidth * 0.002
              }}
            >
              <View
                style={{
                  backgroundColor: isSelected && colors.lightGrey,
                  borderRadius: 5,
                  alignItems: 'center',
                  minWidth: '5.5%',
                  padding: 2
                }}
              >
                <Text
                  style={{
                    fontSize: isSelected ? 22 : 18,
                    fontWeight: isSelected && '500'
                  }}
                >
                  {quantity}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: cartWidth * 0.15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start'
                // marginRight: cartWidth * 0.002
              }}
            >
              <Text
                style={{
                  fontSize: isSelected ? 22 : 18,
                  fontWeight: isSelected && '500'
                }}
              >
                ${(price * quantity).toFixed(2)}
              </Text>
            </View>
            <View
              style={{
                width: cartWidth * 0.15,
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: isSelected ? 22 : 18,
                  fontWeight: isSelected && '500'
                }}
              >
                {0}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const renderItem = ({ item, index }) => {
    return <Item {...item} index={index} />;
  };

  const scrollToIndex = () => {
    cartRef.current.scrollToIndex({
      animating: true,
      index: selectedItem
    });
  };

  const onScrollToIndexFailed = error => {
    cartRef.current.scrollToOffset({
      offset: error.averageItemLength * error.index,
      animated: true
    });

    // setTimeout(() => {
    //   if (cartRef.current !== null) {
    //     cartRef.current.scrollToIndex({
    //       index: error.index,
    //       animated: true
    //     });
    //   }
    // }, 20);
  };

  const flatList = useMemo(() => {
    return (
      <FlatList
        ref={cartRef}
        onScrollToIndexFailed={onScrollToIndexFailed}
        onContentSizeChange={scrollToIndex}
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    );
  });

  return (
    <Modal visible={isVisable} animationType="slide" transparent>
      <BlurView tint="dark" style={styles.centeredView}>
        <View onLayout={getCartWidth} style={styles.cartContainer}>
          <View style={styles.topLabelsContainer}>{displayTopLabels()}</View>
          <View style={styles.cartView}>
            <View style={{ height: '100%' }}>{flatList}</View>
          </View>
          <View style={styles.cartFooter}>
            <View style={styles.cartLabelContainer}>
              <Text style={styles.cartLabel}>SubTotal:</Text>
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
              <Text style={styles.cartLabel}>Discounts:</Text>
              <Text style={styles.cartLabelAmount}>
                ${getCartTotal().total.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => dispatch(displayCartModal())}
          style={{
            backgroundColor: colors.danger,
            width: '19%',
            borderRadius: 10,
            marginTop: '0.8%'
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: colors.white,
              textAlign: 'center',
              margin: 8
            }}
          >
            Go Back
          </Text>
        </Pressable>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    padding: 10
  },

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

export default CartModal;

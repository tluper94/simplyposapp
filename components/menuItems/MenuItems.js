import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { store } from '../../mockData';
import colors from '../../theme/colors';
import { FlatGrid } from 'react-native-super-grid';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { useEffect, useState } from 'react';

export default function MenuItems() {
  const orderViewState = useSelector(state => state.orderView);
  const dispatch = useDispatch();

  const filteredItems = orderViewState.menuItems.filter(item => {
    return item.GroupID === orderViewState.currentCategory;
  });

  const onPressHandler = item => {
    const cartItem = {
      id: item.ItemID * Math.floor(Math.random() * 10000),
      item: item.ItemName,
      quantity: 1,
      price: item.DefaultUnitPrice,
      modifiers: []
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <FlatGrid
      itemDimension={120}
      data={filteredItems}
      spacing={10}
      keyExtractor={item => item.ItemID}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => onPressHandler(item)}
          style={styles.menuItemContainer}
        >
          <Text style={styles.itemName}>{item.ItemName}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  menuItemContainer: {
    height: 120,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemName: {
    color: colors.white,
    fontSize: 18
  }
});

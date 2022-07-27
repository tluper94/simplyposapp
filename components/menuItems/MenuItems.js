import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { store } from '../../mockData';
import colors from '../../theme/colors';
import { FlatGrid } from 'react-native-super-grid';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function MenuItems() {
  const orderViewState = useSelector(state => state.orderView);

  const filteredItems = orderViewState.menuItems.filter(item => {
    return item.GroupID === orderViewState.currentCategory;
  });

  return (
    <FlatGrid
      itemDimension={120}
      data={filteredItems}
      spacing={10}
      renderItem={({ item }) => (
        <View key={item.ItemID} style={styles.menuItemContainer}>
          <Text style={styles.itemName}>{item.ItemName}</Text>
        </View>
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

import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import colors from '../../theme/colors';
import { store } from '../../mockData';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategory } from '../../features/orderView/orderViewSlice';

const MenuCategories = () => {
  const { currentCategory } = useSelector(state => state.orderView);
  const dispatch = useDispatch();

  const onPrssHandler = GroupID => {
    dispatch(selectedCategory(GroupID));
  };

  return (
    <ScrollView style={{ flexGrow: 1 }}>
      {store.groupList.map(item => (
        <Pressable
          key={item.GroupID}
          onPress={() => onPrssHandler(item.GroupID)}
          style={[
            styles.itemContainer,
            currentCategory === item.GroupID && {
              backgroundColor: colors.grey,
              borderColor: colors.primary,
              borderWidth: 3,
              borderBottomWidth: 3,
              borderBottomColor: colors.primary
            }
          ]}
        >
          <Text style={{ color: colors.light, fontSize: 17 }}>
            {item.GroupName}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default MenuCategories;

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    borderRadius: 18,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    backgroundColor: colors.darkGrey
  }
});

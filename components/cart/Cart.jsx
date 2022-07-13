import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import tw from '../../libs/TailwindConfig';
import { Dimensions } from 'react-native';

const Cart = ({ navHeight }) => {
  const [pullDownHeight, setPullDownHeight] = useState(70);

  const onMove = e => {
    const height = pullDownHeight + e.nativeEvent.locationY * 0.1;
    if (height > 70) {
      setPullDownHeight(height);
    }
  };

  const onMoveEnd = e => {
    if (e.nativeEvent.locationY <= 0) {
      setPullDownHeight(70);
    } else {
      setPullDownHeight(160);
    }
  };

  return (
    <View
      style={tw`top-[${navHeight}px] px-1 pb-1 z-10 rounded-b-3xl absolute h-${pullDownHeight} w-full bg-primary`}
    >
      <View style={tw`w-full h-8`}></View>
      <View style={tw`h-${pullDownHeight - 20} w-full bg-gray-white`}></View>
      <View
        style={tw`flex-1 flex flex-row justify-evenly items-center rounded-b-3xl w-full bg-gray-black `}
      >
        <View>
          <Text style={tw`text-xl font-bold text-primary`}>Sub Total</Text>
        </View>

        <View>
          <Text style={tw`text-xl font-bold text-primary`}>Taxes</Text>
        </View>

        <View>
          <Text style={tw`text-xl font-bold text-primary`}>Total</Text>
        </View>

        <View>
          <Text style={tw`text-xl font-bold text-primary`}>Balance</Text>
        </View>
      </View>
      <View
        onStartShouldSetResponder={() => true}
        onResponderMove={onMove}
        onResponderEnd={onMoveEnd}
        hitSlop={{ top: 25, bottom: 40, left: 40, right: 25 }}
        style={styles.arrow}
      >
        <View style={styles.insideArrow}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    position: 'absolute',
    width: 200,
    height: 0,
    top: '100%',
    left: '40%',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#2c7be5',
    borderTopWidth: 10
  },
  insideArrow: {
    position: 'relative',
    width: 185,
    height: 0,
    top: -7.5,
    left: -2,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    borderTopWidth: 5
  }
});

export default Cart;

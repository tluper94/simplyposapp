import { View } from 'react-native';
import { useState } from 'react';
import tw from '../../libs/TailwindConfig';

const Cart = ({ navHeight }) => {
  const [pullDownHeight, setPullDownHeight] = useState(60);
  const [yStart, setYStart] = useState(0);

  const onMove = e => {
    const height = pullDownHeight + e.nativeEvent.locationY * 0.1;
    if (height > 60) {
      setPullDownHeight(height);
    }
    setYStart(e.nativeEvent.pageY);
  };

  const onMoveEnd = e => {
    if (e.nativeEvent.locationY <= 0) {
      console.log('True');
      setPullDownHeight(60);
    } else {
      console.log('False');
      setPullDownHeight(160);
    }
  };

  return (
    <View
      style={tw` top-[${navHeight}px] z-10 rounded-b-3xl absolute h-${pullDownHeight} w-full bg-primary`}
    >
      <View style={tw`h-${pullDownHeight - 10} justify-end  bg-gray-white`}>
        <View style={tw` h-10 rounded-b-3xl w-full bg-gray-black`}>
          <View
            onStartShouldSetResponder={() => true}
            onResponderMove={onMove}
            onResponderEnd={onMoveEnd}
            hitSlop={{ top: 25, bottom: 40, left: 40, right: 25 }}
            style={tw`  top-2 -z-1 w-18 ml-auto mr-auto  mt-1 h-2 rounded bg-gray-100`}
          ></View>
        </View>
      </View>
    </View>
  );
};

export default Cart;

import { useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from './libs/TailwindConfig';
import { Header, Icon } from '@rneui/themed';
import { Motion } from '@legendapp/motion';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';

export default function App() {
  const [navHeight, setNavHeight] = useState(0);

  const getNavHeight = e => {
    setNavHeight(e.nativeEvent.layout.height);
  };

  return (
    <View style={tw`bg-gray-black flex-1 flex-col`}>
      <Navbar getNavHeight={getNavHeight} />
      <Cart navHeight={navHeight} />
      <View style={tw`w-full mb-2 -z-1 h-60`} />
      <View style={tw`w-full flex-1 flex flex-row`}>
        <View style={tw`w-40 mr-1 h-full bg-darkGrey`}></View>
        <View style={tw`flex-1 h-full bg-darkGrey`}></View>
        <View style={tw`w-40 ml-1 h-full bg-darkGrey`}></View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

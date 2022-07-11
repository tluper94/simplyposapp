import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { create } from 'twrnc';
import tw from './libs/TailwindConfig';
import { SafeAreaView } from 'react-native';

import Topbar from './components/topbar/Topbar';
import { Header, Icon } from '@rneui/themed';
import { useState } from 'react';

export default function App() {
  const [navHeight, setNavHeight] = useState(0);
  const [pullDownHeight, setPullDownHeight] = useState(60);
  const [yStart, setYStart] = useState(0);
  const [yEnd, setYEnd] = useState(0);

  const getNavHeight = e => {
    setNavHeight(e.nativeEvent.layout.height);
  };

  const onPullDownPressIn = e => {
    setPullDownHeight(pullDownHeight + e.nativeEvent)
  };

  const onMove = (e) => {
    setPullDownHeight(pullDownHeight + e.nativeEvent.locationY * 0.1)
    setYStart(e.nativeEvent.pageY)
  }

  const onMoveEnd = (e) => {
    if (e.nativeEvent.pageY > yStart) {
      setPullDownHeight(160)
    } else {
      setPullDownHeight(60)
    }
  }

  console.log(navHeight);
  return (
    <View style={tw`bg-gray-black flex-1 flex-col`}>
      <View onLayout={getNavHeight} style={tw`pt-4 bg-gray-black`}>
        <Header
          backgroundColor="black"
          leftComponent={
            <View style={tw`flex flex-row items-center`}>
              <Icon
                style={tw`mr-5`}
                color="#2c7be5"
                type="entypo"
                name="menu"
                size={30}
              />
              <Text style={tw`text-primary text-lg`}>Simply POS</Text>
            </View>
          }
        />
      </View>
      <View
        style={tw` top-[${navHeight}px] z-10 rounded-b-3xl absolute w-full h-${pullDownHeight.toString()} bg-primary`}
      >
        <View style={tw`flex-1 rounded-b-3xl bg-gray-white m-1`}></View>
  
        <Pressable
        >
          <View onStartShouldSetResponder={()=>true} onResponderMove={onMove} onResponderEnd={onMoveEnd} style={tw`w-18 ml-auto mr-auto h-8 bg-gray-800`}></View>
        </Pressable>
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from './libs/TailwindConfig';
import { Icon } from '@rneui/themed';
import { Motion } from '@legendapp/motion';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';
import * as ScreenOrientation from 'expo-screen-orientation';
import SquareBtn from './components/squareBtn/SquareBtn';

//Icon imports
import {
  Food,
  Calendar,
  Clipboard,
  Waiter,
  PaperStack
} from './components/icons/Icons';

export default function App() {
  const [navHeight, setNavHeight] = useState(0);

  const getNavHeight = e => {
    setNavHeight(e.nativeEvent.layout.height);
  };

  useEffect(() => {
    const changeScreenOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    };
    changeScreenOrientation();
  }, []);

  return (
    <View style={tw`bg-gray-black flex-1 flex-col`}>
      <Navbar getNavHeight={getNavHeight} />
      <Cart navHeight={navHeight} />
      <View style={tw`w-full mb-2 -z-1 h-59`} />
      <View style={tw`w-full flex-1 flex flex-row`}>
        <View
          style={tw`flex justify-center w-35 pl-2 pr-3 pt-1 mr-1 h-full bg-darkGrey`}
        >
          {greenBtns.map((btn, idx) => (
            <View key={idx + btn.title} style={tw`mb-2 `}>
              <SquareBtn {...btn} />
            </View>
          ))}
        </View>
        <View style={tw`flex-1 h-full bg-darkGrey`}>
          <Food width={100} height={100} stroke="#fff" />
        </View>
        <View
          style={tw`flex justify-center w-32 px-1 mr-1  ml-1 h-full bg-darkGrey`}
        >
          {blueBtns.map(
            ({ width, height, color, header, footer, title }, idx) => (
              <View key={idx + title} style={tw`mb-2  `}>
                <SquareBtn width={width} height={height} color={color} />
              </View>
            )
          )}
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const greenBtns = [
  {
    title: 'New Order',
    color: '#44944A',
    icon: (
      <Food
        width={50}
        height={50}
        stroke="#e7e7e7"
        strokeWidth={1.9}
        fill="#e7e7e7"
      />
    ),
    width: 115,
    height: 92
  },
  {
    title: 'Status Filter',
    color: '#44944A',
    header: 'All',
    icon: (
      <Clipboard
        marginLeft={15}
        width={45}
        height={45}
        stroke="#e7e7e7"
        strokeWidth={10}
        fill="#e7e7e7"
      />
    ),
    width: 115,
    height: 92
  },
  {
    title: 'Server Filter',
    color: '#44944A',
    header: 'All',
    icon: (
      <Waiter
        width={45}
        height={45}
        stroke="#e7e7e7"
        strokeWidth={5}
        fill="#e7e7e7"
      />
    ),
    width: 115,
    height: 92
  },
  {
    title: 'Type Filter',
    color: '#44944A',
    header: 'All',
    icon: (
      <PaperStack
        width={45}
        height={45}
        stroke="#e7e7e7"
        strokeWidth={5}
        fill="#e7e7e7"
      />
    ),
    width: 115,
    height: 92
  },
  {
    title: 'Date Filter',
    color: '#44944A',
    header: 'All',
    icon: (
      <Calendar
        width={45}
        height={45}
        stroke="#e7e7e7"
        strokeWidth={10}
        fill="#e7e7e7"
      />
    ),
    width: 115,
    height: 92
  }
];

const blueBtns = [
  {
    title: 'New Order',
    color: '#4597F6',
    width: 115,
    height: 92
  },
  {
    title: 'New Order',
    color: '#4597F6',
    width: 115,
    height: 92
  },
  {
    title: 'New Order',
    color: '#4597F6',
    width: 115,
    height: 92
  },
  {
    title: 'New Order',
    color: '#4597F6',
    width: 115,
    height: 92
  },
  {
    title: 'New Order',
    color: '#4597F6',
    width: 115,
    height: 92
  }
];

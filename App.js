import React from 'react';
import { View, Text } from 'react-native';
import Count from './components/Count';

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>React Native Redux Example</Text>
      <Count/>
      
    </View>
  );
};

export default App;
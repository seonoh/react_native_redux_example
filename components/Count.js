import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Count extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={s.container}>
        <Text style={{ fontSize: 20 }}>0</Text>
        <TouchableOpacity style={s.upButton}>
          <Text style={{ fontSize: 20 }}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.upButton}>
          <Text style={{ fontSize: 20 }}>+2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.downButton}>
          <Text style={{ fontSize: 20 }}>-1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.downButton}>
          <Text style={{ fontSize: 20 }}>-2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  upButton: {
    marginLeft: 20,
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 20
  },
  downButton: {
    marginLeft: 20,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 20
  }
});

export default Count;

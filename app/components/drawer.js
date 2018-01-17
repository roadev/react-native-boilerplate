import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});

const DrawerContent = () => (
  <View style={{ flex: 1 }}>
    {/* <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Posts</Text> */}
    <TouchableHighlight
      onPress={() => console.log('hi')}
      underlayColor="#EEEEEE"
    >
      <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Posts</Text>
    </TouchableHighlight>
    {/* title="Posts"
      buttonStyle={{ backgroundColor: 'transparent', width: 300, marginLeft: 0 }}
      textStyle={{ color: '#000000' }}
    /> */}
  </View>
)


export default DrawerContent;

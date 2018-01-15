import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

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

class DrawerContent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Title: title</Text>
        {/* <Button onPress={Actions.pop}>Back</Button> */}
      </View>
    )
  }
}

export default DrawerContent;

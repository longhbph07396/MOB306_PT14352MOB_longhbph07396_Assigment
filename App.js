import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewApp from './view_app'

export default function App() {
  return (
    <View >
      <ViewApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

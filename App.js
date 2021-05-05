import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Calc } from "./src/components/screens";

export default class App extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Calc />
      </SafeAreaView>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

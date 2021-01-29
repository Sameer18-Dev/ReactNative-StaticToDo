import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{paddingTop: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

        <TextInput 
         placeholder="Enter some data..."
         style={{width: '70%', borderBottomColor: 'black', borderBottomWidth: 1}} />
                 <Button title="Add +" />

      <StatusBar style="auto" />
    </View>
  );
}
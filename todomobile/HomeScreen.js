import React from "react";
import { StyleSheet } from "react-native";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }){
    return(
        <View style={styles.container}>
            <Text>
                HomeScreen
            </Text>
            <Button 
                title="Go to other screen"
                onPress={() => navigation.navigate('Other') }
            />
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
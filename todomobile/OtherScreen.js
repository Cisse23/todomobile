import React from "react";
import { Button, View, Text } from "react-native";

export default function OtherScreen({ navigation }){
    return(
        <View>
            <Text>
                Other Screen
            </Text>
            <Button
                title="Go to Other screen... again"
                onPress={() => navigation.push('Other')}
            />
            <Button 
                title="Go back"
                onPress={() => navigation.goBack() }
            />
             <Button 
                title="Go to Home" 
                onPress={() => navigation.navigate('Home')} 
            />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />            
        </View>
    );
}

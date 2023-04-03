import TransactionScreen from "../screens/transaction";
import SearchScreen from "../screens/search";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";


const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends React.Component{
render(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Transaction" Component = {TransactionScreen}>
                    
                </Tab.Screen>
                <Tab.Screen name = "Search" Component = {SearchScreen}>

                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
}


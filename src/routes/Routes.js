import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../screens/Screens';
import React from 'react';
const Stack = createStackNavigator();
const Routes = () => {
    return (
        <Stack.Navigator headerMode="screen">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};
export default Routes;
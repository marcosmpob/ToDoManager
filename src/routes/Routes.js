import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';
import { Login, Register, ToDoTasks, DoneTasks } from '../screens/Screens';
import React from 'react';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const TaskTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                iconStyle: { width: 20, height: 20 },
            }}>
            <Tab.Screen name="To Do" component={ToDoTasks} />
            <Tab.Screen name="Done" component={DoneTasks} />
        </Tab.Navigator>
    );
};

const Routes = () => {
    return (
        <Stack.Navigator headerMode="screen">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="TaskList" component={TaskTab} />
        </Stack.Navigator>
    );
};

export default Routes
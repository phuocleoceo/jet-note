import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import useSQLite from "./hooks/useSQLite";
import React, { useEffect } from 'react';

import NoteScreen from './screens/NoteScreen';

const Stack = createNativeStackNavigator();

export default function Navigation()
{
    const { Create_Table, Drop_Table, Clear_Table } = useSQLite();

    useEffect(() => Create_Table(), []);

    // useEffect(() => Drop_Table(), []);

    // useEffect(() => Clear_Table(), []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Note">
                <Stack.Screen name="Note" component={NoteScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
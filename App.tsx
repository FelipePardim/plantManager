import React, { useEffect } from "react";
import AppLoading from 'expo-app-loading';
import * as Notification from 'expo-notifications';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

import Routes from './src/routes';
import { PlantProps } from "./src/libs/storage";

export default function App() {
    const [ fontsLoaded ] = useFonts({
        Jost_600SemiBold,
        Jost_400Regular
    }) ;

    useEffect(() => {
        const subscription = Notification.addNotificationReceivedListener(
            async notificaiton => {
                const data = notificaiton.request.content.data.plant as PlantProps;
                console.log(data);
            });

            return () => subscription.remove();
    })

    if(!fontsLoaded) {
        return(
            <AppLoading />
        )
    }

    return (
        <Routes />
    );
}
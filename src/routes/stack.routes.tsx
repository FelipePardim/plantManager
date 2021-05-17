import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';

import colors from '../../styles/colors';
import AuthRoutes from './tab.routes';

const strackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <strackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <strackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
        <strackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />
        <strackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />
        <strackRoutes.Screen
            name="PlantSelect"
            component={AuthRoutes}
        />

        <strackRoutes.Screen
            name="PlantSave"
            component={PlantSave}
        />

        <strackRoutes.Screen
            name="MyPlants"
            component={AuthRoutes}
        />
    </strackRoutes.Navigator>
)

export default AppRoutes;
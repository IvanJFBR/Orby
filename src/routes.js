import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
            />
        </Tab.Navigator>
    )
}
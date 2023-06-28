import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 

import telaInicial from '../paginas/pagTelaInicial/TelaInicial';
import pagLivrosFav from '../paginas/pagTelaInicial/pagLivrosFav/LivrosFavoritos';
import pagPerfil from '../paginas/pagPerfil/PagPerfil';

const Tab = createBottomTabNavigator();


export default function TabRota(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="telaInicial"
            component={telaInicial}
            options={{
                tabBarLabel: '',
                tabBarIcon: () => <Feather name="home" size={20} color="black" />,
                headerShown: false
            }}
            />

            <Tab.Screen
            name="pagLivrosFav"
            component={pagLivrosFav}
            options={{
                tabBarLabel: '',
                tabBarIcon: () => <Feather name="heart" size={20} color="black" />,
                headerShown: false
            }}
            />

            <Tab.Screen
            name="pagPerfil"
            component={pagPerfil}
            options={{
                tabBarLabel: '',
                tabBarIcon: () => <Feather name="user" size={24} color="black" />,
                headerShown: false
            }}
            />

        </Tab.Navigator>
    )
}
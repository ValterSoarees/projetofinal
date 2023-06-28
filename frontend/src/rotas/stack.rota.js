import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'; 

import pagBemVindos from '../paginas/pagBemVindos/TelaBemVindos';
import pagTelaLogin from '../paginas/pagTelaLogin/TelaLogin';
// import pagTelaCadastro from '../paginas/pagTelaCadastro/TelaCadastro';
// import pagSenha from '../paginas/pagSenha/TelaSenha';
import pagLivroDetalhes from '../paginas/pagTelaInicial/pagLivroDetalhes/DetalhesLivro';

import TabRota from './tab.rota';
import DrawerRota  from './drawer.rota';

const Stack = createNativeStackNavigator();


export default function StackRota(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="pagBemVindos"
            component={pagBemVindos}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="pagTelaLogin"
            component={pagTelaLogin}
            options={{ headerShown: false }}
            />

            {/* <Stack.Screen
            name="pagTelaCadastro"
            component={pagTelaCadastro}
            options={{ headerShown: false }} 
            />*/}

            {/* <Stack.Screen
            name="pagSenha"
            component={pagSenha}
            options={{ headerShown: false }}
            /> */}

            <Stack.Screen
            name="tabBottom"
            component={TabRota}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="drawerRota"
            component={DrawerRota}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="pagLivroDetalhes"
            component={pagLivroDetalhes}
            options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
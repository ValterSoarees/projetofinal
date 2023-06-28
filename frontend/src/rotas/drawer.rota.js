import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer'

import TabRota from './tab.rota';
import pagSenha from '../paginas/pagSenha/TelaSenha'
import pagPerfil from '../paginas/pagPerfil/PagPerfil'

const Drawer = createDrawerNavigator();

// function CustomDrawerContent(props) {
//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem label="Sair" onPress={() => navigation.navigate('pagTelaLogin')} />
//       </DrawerContentScrollView>
//     );
//   }

export default function DrawerRota(){
    return(
    <Drawer.Navigator 
        // useLegacyImplementation
        // drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen
        name="Início"
        component={TabRota}
        />

    <Drawer.Screen
        name="Trocar Senha"
        component={pagSenha}
        />
 
    {/* <Drawer.Screen
        name="Perfil"
        component={pagPerfil}
        /> */}

    </Drawer.Navigator>
    )
}
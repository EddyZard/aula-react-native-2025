import { createDrawerNavigator } from '@react-navigator/drawer';
import HomeScreen from './Tela1.js';
import ProfileScreen from './Tela2.js';

  const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigatorContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigatorContainer>
  );
}

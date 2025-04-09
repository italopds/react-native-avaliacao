import Home from './screens/Home/index';
import Cars from './screens/Cars/index';
import Car1 from './screens/CarDetails/car1/index';
import Car2 from './screens/CarDetails/car2/index';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Route() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cars" component={Cars} />
      <Drawer.Screen name="Car1" component={Car1} />
      <Drawer.Screen name="Car2" component={Car2} />
    </Drawer.Navigator>
  );
}

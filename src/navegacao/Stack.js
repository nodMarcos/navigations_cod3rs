import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PassoStack from '../components/PassoStack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <Stack.Navigator initialRouteName="TelaA">
      <Stack.Screen
        name="TelaA"
        options={{
          title: 'Informações iniciais',
        }}
        >
        {props => (
          <PassoStack {...props} avancar="TelaB">
            <TelaA />
          </PassoStack>
        )}
      </Stack.Screen>

      <Stack.Screen name="TelaB">
      {props => (
          <PassoStack {...props} avancar="TelaC" avancarParam={{num: 1007}} voltar>
            <TelaB />
          </PassoStack>
        )}
      </Stack.Screen>

      <Stack.Screen name="TelaC" >
      {props => (
          <PassoStack {...props} avancar="TelaC" voltar>
            <TelaC {...props}/>
          </PassoStack>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
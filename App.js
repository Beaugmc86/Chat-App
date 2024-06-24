// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

// inintialize firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import the screens
import Start from './components/Start';
import Chat from './components/Chat';

const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAg-d-N4y5lg2vUgHEbk62NZuUqqUi_2UI",
    authDomain: "chatter-app-8fe58.firebaseapp.com",
    projectId: "chatter-app-8fe58",
    storageBucket: "chatter-app-8fe58.appspot.com",
    messagingSenderId: "171528837725",
    appId: "1:171528837725:web:d9cf57f5d8b275cb398bb4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat"
        >
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

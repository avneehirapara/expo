import * as React from 'react';
import { Provider } from 'react-redux';
import { StackNavigation } from './Route/StackNavigation';
import { configStore } from './Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './SCR/ProfileScreen';

export default function App() {

  let storeA = configStore();

  return (
    <Provider store={storeA}>

     {/* <NavigationContainer>
       <StackNavigation /> 
     </NavigationContainer>  */}
     <ProfileScreen />  

    </Provider>
  )
}



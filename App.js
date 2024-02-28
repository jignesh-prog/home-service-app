import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import LoginScreen from './App/Screens/LoginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
export default function App() {
  return (
       <ClerkProvider publishableKey='pk_test_bm90YWJsZS1rYW5nYXJvby02Ny5jbGVyay5hY2NvdW50cy5kZXYk'>
     <SafeAreaView style={styles.container}>
      <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <LoginScreen/>
        </SignedOut>
      
      </SafeAreaView>
      </ClerkProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
});

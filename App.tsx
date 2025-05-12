/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   /*
//    * To keep the template simple and small we're adding padding to prevent view
//    * from rendering under the System UI.
//    * For bigger apps the recommendation is to use `react-native-safe-area-context`:
//    * https://github.com/AppAndFlow/react-native-safe-area-context
//    *
//    * You can read more about it here:
//    * https://github.com/react-native-community/discussions-and-proposals/discussions/827
//    */
//   const safePadding = '5%';
//   const [name, setName] = useState('');
//     const quotes = [
//     "Học, học nữa, học mãi.",
//     "Thành công là một hành trình, không phải đích đến.",
//     "Kiên trì là chìa khóa của thành công.",
//     "Không có áp lực, không có kim cương.",
//     "Bạn chính là điều bạn nghĩ.",
//     "Hãy sống như hôm nay là ngày cuối cùng.",
//     "Đừng chờ cơ hội, hãy tạo ra nó.",
//     "Thất bại là mẹ thành công.",
//     "Chỉ cần bạn không dừng lại, bạn sẽ đến được đích.",
//     "Mỗi ngày là một cơ hội mới.",
//      "Thành công là một hành trình, không phải đích đến.",
//     "Kiên trì là chìa khóa của thành công.",
//     "Không có áp lực, không có kim cương.",
//     "Bạn chính là điều bạn nghĩ.",
//     "Hãy sống như hôm nay là ngày cuối cùng.",
//     "Đừng chờ cơ hội, hãy tạo ra nó.",
//     "Thất bại là mẹ thành công.",
//     "Chỉ cần bạn không dừng lại, bạn sẽ đến được đích.",
//     "Mỗi ngày là một cơ hội mới.",
//      "Thành công là một hành trình, không phải đích đến.",
//     "Kiên trì là chìa khóa của thành công.",
//     "Không có áp lực, không có kim cương.",
//     "Bạn chính là điều bạn nghĩ.",
//     "Hãy sống như hôm nay là ngày cuối cùng.",
//     "Đừng chờ cơ hội, hãy tạo ra nó.",
//     "Thất bại là mẹ thành công.",
//     "Chỉ cần bạn không dừng lại, bạn sẽ đến được đích.",
//     "Mỗi ngày là một cơ hội mới."
//   ];

//   return (



//      <ScrollView contentContainerStyle={styles.container}>

//         {/* <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//               <Stack.Screen name="Home" component={HomeScreen} />
//               <Stack.Screen name="Profile" component={ProfileScreen} />
//               <Stack.Screen name="Details" component={DetailsScreen} />
//             </Stack.Navigator>
//           </NavigationContainer> */}

//          {/* <NavigationContainer>
//           <Stack.Navigator initialRouteName="Login">
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Main" component={MainScreen} />
//           </Stack.Navigator>
//         </NavigationContainer> */}

//       <Text style={styles.header}>Họ tên người dùng</Text>

//       <Image
//         source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
//         style={styles.avatar}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Nhập tên của bạn"
//         onChangeText={text => setName(text)}
//         value={name}
//       />

//       <Button
//         title="Hiển thị"
//         onPress={() => Alert.alert("Tên bạn nhập là:", name)}
//       />

//       <TouchableOpacity
//         style={styles.customButton}
//         onPress={() => Alert.alert("Chào bạn,", name || "khách")}
//       >
//         <Text style={styles.buttonText}>Nút tùy biến</Text>
//       </TouchableOpacity>

//       <Text style={styles.quoteHeader}>Những câu quote truyền cảm hứng:</Text>
//       {quotes.map((quote, index) => (
//         <Text key={index} style={styles.quote}>
//           {index + 1}. {quote}
//         </Text>
//       ))}
//     </ScrollView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  customButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  quoteHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  quote: {
    fontSize: 14,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
});

export default App;

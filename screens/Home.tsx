import { View, Text} from 'react-native'
import HeaderTabs from '../components/HeaderTabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';

export default function Home() { 
   return (
    <View>    
      <SafeAreaView style ={{backgroundColor: '#eee'}}>
      </SafeAreaView>
      <View>
        <HeaderTabs/>
        <SearchBar/>
      </View>
    </View>

  
  )
} 

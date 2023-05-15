import { View, Text} from 'react-native'
import HeaderTabs from '../components/HeaderTabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

export default function Home() { 
   return (
    <View >    
      <View>
        <HeaderTabs/>
        <SearchBar/>
        <Categories/>
      </View>
    </View>

  
  )
} 

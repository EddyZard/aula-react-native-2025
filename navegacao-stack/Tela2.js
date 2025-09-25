import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }){
    const { produtoId } = route.params;
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            
        </View>
    );
}
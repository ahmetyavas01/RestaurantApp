import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';


export default function ResultList({ title, results }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:18, marginBottom:10, marginLeft:15}}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id:item.id})}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
        marginVertical:20,
    }
});

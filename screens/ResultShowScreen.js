import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default function ResultShowScreen({ route }) {
    const [result, setResult] = useState(null);
    const id = route.params.id;

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (error) {
            console.error("Sonuç getirilirken bir hata oluştu:", error);
        }
    }

    useEffect(() => {
        getResult(id);
    }, [id]);

    return (
        <View style={{ marginTop: 50 }}>
            {result ? <Text style={styles.ResultName}>{result.name}</Text> : <Text>Sonuç bulunamadı.</Text>}
            {result ? <Text style={styles.ResultPhone}>{result.phone}</Text> : <Text>Sonuç bulunamadı.</Text>}
            {result ?
                result.is_closed ? <Text style={styles.errorText}><View style={styles.mekan_acik} />  Restoran Açık</Text> :
                    <Text style={styles.errorText}><View style={styles.mekan_kapali} />  Restoran Kapalı</Text>
                : <Text>Sonuç bulunamadı.</Text>
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    ResultName: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    ResultPhone: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    mekan_acik: {
        width: 14,
        height: 14,
        backgroundColor: 'green',
        borderRadius: 7,
    },
    mekan_kapali: {
        width: 14,
        height: 14,
        backgroundColor: 'red',
        borderRadius: 7,
    },
    errorText:{
        fontSize:18,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:15
    }

})

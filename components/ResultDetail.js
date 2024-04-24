import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={{fontWeight:'bold',}}>{result.name}</Text>
      <Text style={styles.info}>
        {result.rating} ★ , {result.review_count} Değerlendirme
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        width: 250, height: 120 ,
        marginBottom:12, borderRadius:10,
    },
    info:{
        fontSize:15,
        marginTop:5
    }
});

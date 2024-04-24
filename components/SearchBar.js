import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({ onTermChange, onTermSubmit, term }) {
    return (

        <View>
            <View style={styles.search}>
                <View style={{ flex: 1, }}>
                    <AntDesign name="search1" size={30} color="black" style={{ marginHorizontal: 20 }} />
                </View>
                <View style={{ flex: 4.5 }}>
                    <TextInput style={styles.input} placeholder='Ara' autoCorrect={false} autoCapitalize='none'
                        onChangeText={onTermChange} onEndEditing={onTermSubmit} value={term}
                    ></TextInput>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        width: '90%',
        height: 55,
        backgroundColor: '#e0dcdc',
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
    },
    input: {
        fontSize: 18,
        color: 'gray',
        height: 40,
        width: '90%',
        padding: 10,
    },
})
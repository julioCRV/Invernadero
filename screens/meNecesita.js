import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { db } from '../credenciales'
import { ref, onValue, update } from 'firebase/database'

const FetchData = () => {
    const [data, setData] = useState(null);
    const [newValue, setNewValue] = useState('');

    useEffect(() => {
        const dataRef = ref(db);
        onValue(dataRef, (snapshot) => {
            const dataFromFirebase = snapshot.val();
            setData(dataFromFirebase);
        });
    }, []);

    const handleChangeState = () => {
        if (data && data.Estado_Bomba_Riego !== undefined) {
            const newData = {
                ...data,
                Estado_Bomba_Riego: newValue === "true" ? true : false
            };
            update(ref(db), newData);
        }
    };

    return (
        <View style={styles.container}>
            {data && (
                <View style={styles.dataContainer}>
                    {Object.entries(data).map(([key, value]) => (
                        <View key={key} style={styles.dataItem}>
                            <Text style={styles.label}>{key.replace(/_/g, ' ')}</Text>
                            {key === 'Estado_Bomba_Riego' ? (
                                <TextInput
                                    style={styles.input}
                                    value={newValue}
                                    onChangeText={setNewValue}
                                    placeholder="Enter true or false"
                                />
                            ) : (
                                <Text>{typeof value === 'boolean' ? (value ? "True" : "False") : value}</Text>
                            )}
                        </View>
                    ))}
                    <Button title="Change Estado Bomba Riego" onPress={handleChangeState} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    dataItem: {
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 2,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5,
    },
});

export default FetchData;

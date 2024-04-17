import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Switch, Image } from "react-native";
import { db } from '../credenciales'
import { ref, onValue, update } from 'firebase/database'
import { useRoute } from '@react-navigation/native';

const ConfiguracionInvernadero = () => {
    const route = useRoute();
    const { name, imageUrl } = route.params;
    console.log(name);

    const [data, setData] = useState(null);

    useEffect(() => {
        const dataRef = ref(db);
        onValue(dataRef, (snapshot) => {
            const dataFromFirebase = snapshot.val();
            setData(dataFromFirebase);
            console.log(data);
        });
    }, []);

    const handleChangeState = (key, newValue) => {
        if (data && data[key] !== undefined) {
            const newData = {
                ...data,
                [key]: newValue
            };
            update(ref(db), newData)
                .then(() => console.log("Valor actualizado correctamente"))
                .catch((error) => console.error("Error al actualizar el valor:", error));
        }
    };

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            {data && (
                <View style={styles.dataContainer}>
                    {Object.entries(data).map(([key, value]) => (
                        <View key={key} style={styles.dataItem}>
                            <Text style={styles.label}>{key.replace(/_/g, ' ')}</Text>
                            {typeof value === 'boolean' ? (
                                <Switch
                                    value={value}
                                    onValueChange={(newValue) => handleChangeState(key, newValue)}
                                />
                            ) : (
                                <Text>{value}</Text>
                            )}
                        </View>
                    ))}
                </View>

            )}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 20,
    },
});

export default ConfiguracionInvernadero;

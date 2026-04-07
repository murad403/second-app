import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UserDetails = () => {
    const { id } = useRoute().params as { id: string };
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUserDetails(data))
    }, [id]);

    return (
        <View>
            {userDetails && (
                <View style={styles.container}>
                    <Text style={styles.text}>Name: {userDetails.name}</Text>
                    <Text style={styles.text}>Email: {userDetails.email}</Text>
                    <Text style={styles.text}>Phone: {userDetails.phone}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "dodgerblue",
        padding: 20,
        margin: 20,
        borderRadius: 5
    },
    text: {
        fontSize: 20,
        color: "white"
    }
})

export default UserDetails

import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <View>
            <Text>Users: {users.length}</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={{padding: 10, borderRadius: 10, backgroundColor: "lightblue", marginBottom: 10}}>
                        <Text style={{fontWeight: "semibold", fontSize: 18}}>Name: {item.name}</Text>
                        <Text style={{fontSize: 16}}>Email: {item.email}</Text>
                        <Text style={{fontSize: 16}}>Address: {item.address?.street}, {item.address?.city}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Users

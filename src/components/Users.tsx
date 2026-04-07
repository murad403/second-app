import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

export interface Root {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}


const Users = () => {
    const [users, setUsers] = useState<Root[]>([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <View style={{padding: 10}}>
            <Text style={{fontSize: 24, fontWeight: "bold"}}>Users: {users.length}</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={{padding: 10, borderRadius: 10, backgroundColor: "lightblue", marginBottom: 10}}>
                        <Text style={{fontWeight: "semibold", fontSize: 18}}>Name: {item.name}</Text>
                        <Text style={{fontSize: 16}}>Email: {item.email}</Text>
                        <Text style={{fontSize: 16}}>Address: {item.address?.street}, {item.address?.city}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Users

import React, { useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

const ResponsiveLayout = (props) => {
    const [active, setActive] = useState(1);
    const [radioActive, setRadioActive] = useState(2);

    const radioButtonList = [
        { id: 2, label: "css" },
        { id: 5, label: "typescript" },
        { id: 6, label: "javascript" },
        { id: 7, label: "react native" },
        { id: 8, label: "react js" },
        { id: 9, label: "next js" },
    ];
    return (
        <View style={styles.mainBox}>
            <View style={styles.box1}>
                <View style={styles.innerBox1}>
                    <TouchableHighlight onPress={() => props.navigation.navigate("Login")}>
                        <Text style={styles.button}>Go to Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text style={[styles.button, styles.primary]}>Primary</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text style={[styles.button, styles.success]}>Success</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text style={[styles.button, styles.error]}>Error</Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text style={[styles.button, styles.warning]}>Warning</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.innerBox2}>
                    <TouchableOpacity onPress={() => setActive(1)} style={radioButtonStyle.radioButton}>
                        <View style={radioButtonStyle.radio}>
                            {
                                active === 1 && <View style={radioButtonStyle.radioActive}></View>
                            }
                        </View>
                        <Text style={radioButtonStyle.radioText}>Radio 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActive(2)} style={radioButtonStyle.radioButton}>
                        <View style={radioButtonStyle.radio}>
                            {
                                active === 2 && <View style={radioButtonStyle.radioActive}></View>
                            }
                        </View>
                        <Text style={radioButtonStyle.radioText}>Radio 2</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* dynamic radio button */}
            <View style={styles.box2}>
                <View style={{marginLeft: 30, gap: 4}}>
                    {
                        radioButtonList.map((item) => (
                            <TouchableOpacity onPress={() => setRadioActive(item.id)} key={item.id} style={dynamicRadioButtonStyles.radio}>
                                <View style={dynamicRadioButtonStyles.radioButton}>
                                    {
                                        radioActive === item.id && <View style={dynamicRadioButtonStyles.radioActive}></View>
                                    }
                                </View>
                                <Text style={dynamicRadioButtonStyles.radioButtonText}>{item.label}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>


            <View style={styles.box3}>
                    <LoadingIndicator/>
            </View>
        </View>
    )
}

const dynamicRadioButtonStyles = StyleSheet.create({
    radioButtonText: {
        color: "white",
        fontSize: 18
    },
    radio: {
        alignItems: "center",
        flexDirection: "row",
        gap: 5
    },
    radioButton: {
        borderWidth: 2,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: "gold",
        alignItems: "center",
        justifyContent: "center"
    },
    radioActive: {
        backgroundColor: "honeydew",
        width: 15,
        height: 15,
        borderRadius: 7.5
    }
})


const radioButtonStyle = StyleSheet.create({
    radio: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderRadius: 12.5,
        alignItems: "center",
        justifyContent: "center"
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4
    },
    radioText: {
        color: "dodgerblue"
    },
    radioActive: {
        width: 15,
        height: 15,
        backgroundColor: "dodgerblue",
        borderRadius: 7.5
    }
})


const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        backgroundColor: "gray"
    },
    box1: {
        flex: 2,
        backgroundColor: "red",
        flexDirection: "row",
        padding: 20,
        gap: 20
    },
    box2: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "baseline"
    },
    box3: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    },
    innerBox1: {
        flex: 2,
        backgroundColor: "lightcoral",
        padding: 20,
        gap: 5
    },
    innerBox2: {
        flex: 1,
        backgroundColor: "lightblue",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        gap: 4
    },
    button: {
        color: "white",
        backgroundColor: "gray",
        borderRadius: 5,
        paddingVertical: 10,
        textAlign: "center",
        shadowColor: "blue",
        elevation: 5,
        shadowOpacity: 0.5
    },
    primary: {
        backgroundColor: "blue"
    },
    success: {
        backgroundColor: "green"
    },
    error: {
        backgroundColor: "red"
    },
    warning: {
        backgroundColor: "orange"
    }
})


const LoadingIndicator = () =>{
    const [showLoading, setShowLoading] = useState(false);

    const DisplayLoading = () =>{
        setShowLoading(true);
        setTimeout(() =>{
            setShowLoading(false)
        }, 5000)
    }

    return (
        <View>
            <ActivityIndicator size={30} color="ghostwhite" animating={showLoading} />
            <Button title='Show Loading' onPress={DisplayLoading}/>
        </View>
    )
}

export default ResponsiveLayout

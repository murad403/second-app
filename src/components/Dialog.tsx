import React from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'

const Dialog = () => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={showModal} animationType='slide'>
          <View style={styles.modalBox}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>This is a simple modal</Text>
              <Button color={"grey"} title='Hide Modal' onPress={() => setShowModal(false)}/>
            </View>
          </View>
      </Modal>

      <View style={styles.modalOpenButton}>
        <Button color={"grey"} title='Show Modal' onPress={() => setShowModal(true)}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  modalOpenButton: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30
  },
  container: {
    flex: 1
  },
  modalBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, 
  modalContent: {
    backgroundColor: "greenyellow",
    padding: 20,
    borderRadius: 10,
    shadowColor: "blue",
    elevation: 10,
    gap: 8
  },
  modalText:{
    fontSize: 20,
    fontWeight: "600",
  }
})

export default Dialog

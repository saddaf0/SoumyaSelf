import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class BackDoor extends Component {
  render() {
    return (
     
      <ScrollView style={styles.container}>
 <View style={styles.AppTittle}>
          <Text style={styles.TittleText}> BackDoor</Text>
        </View>
        <Text style={styles.text}>A backdoor in a computer system, a cryptosystem, or an algorithm, is any secret method of bypassing normal authentication or security controls. They may exist for many reasons, including original design or poor configuration. They may have been added by an authorized party to allow some legitimate access, or by an attacker for malicious reasons; but regardless of the motives for their existence, they create a vulnerability. Backdoors can be very hard to detect, and backdoors are usually discovered by someone who has access to the application source code or intimate knowledge of the computer's operating system.
</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#15193c',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
TittleText: {
    flex: 0.07,
    color: 'white',
    fontSize: 28,
    marginTop: RFValue(5),
    alignSelf: "center",
    borderWidth: 4,
    borderColor: 'lightblue',
  },
   AppTittle: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(10),
  },
});

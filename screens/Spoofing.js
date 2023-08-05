import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Spoofing extends Component {
  render() {
    return (
     
      <ScrollView style={styles.container}>
 <View style={styles.AppTittle}>
          <Text style={styles.TittleText}> Spoofing</Text>
        </View>
        <Text style={styles.text}>
        Spoofing is an act of masquerading as a valid entity through the falsification of data (such as an IP address or username), to gain access to information or resources that one is otherwise unauthorized to obtain. There are several types of spoofing, including:
Email spoofing is where an attacker forges the sending (From, or source) address of an email.
IP address spoofing, where an attacker alters the source IP address in a network packet to hide their identity or impersonate another computing system.
MAC spoofing, where an attacker modifies the Media Access Control (MAC) address of their network interface controller to obscure their identity or to pose as another.
Biometric spoofing, where an attacker produces a fake biometric sample to pose as another user.
Address Resolution Protocol (ARP) spoofing, where an attacker sends spoofed address resolution protocol onto a local area network to associate their Media Access Control address with a different host's IP address. This causes data to be sent to the attacker rather than the intended host.
In 2018, the cybersecurity firm Trellix published research on the life-threatening risk of spoofing in the healthcare industry.


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
});

import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class DenialOfService extends Component {
  render() {
    return (
     
      <ScrollView style={styles.container}>
 <View style={styles.AppTittle}>
          <Text style={styles.TittleText}> DenialOfService</Text>
        </View>
        <Text style={styles.text}>
        Denial of service attacks (DoS) are designed to make a machine or network resource unavailable to its intended users. Attackers can deny service to individual victims, such as by deliberately entering a wrong password enough consecutive times to cause the victim's account to be locked, or they may overload the capabilities of a machine or network and block all users at once. While a network attack from a single IP address can be blocked by adding a new firewall rule, many forms of Distributed denial of service (DDoS) attacks are possible, where the attack comes from a large number of points – and defending is much more difficult. Such attacks can originate from the zombie computers of a botnet or from a range of other possible techniques, including distributed reflective denial of service (DRDoS), where innocent systems are fooled into sending traffic to the victim. With such attacks, the amplification factor makes the attack easier for the attacker because they have to use little bandwidth themselves.

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

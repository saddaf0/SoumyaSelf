import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Phishing extends Component {
  render() {
    return (
     
      <ScrollView style={styles.container}>
 <View style={styles.AppTittle}>
          <Text style={styles.TittleText}> Phishing</Text>
        </View>
        <Text style={styles.text}>
        Phishing is the attempt of acquiring sensitive information such as usernames, passwords, and credit card details directly from users by deceiving the users. Phishing is typically carried out by email spoofing or instant messaging, and it often directs users to enter details at a fake website whose look and feel are almost identical to the legitimate one. The fake website often asks for personal information, such as login details and passwords. This information can then be used to access the individual's real account on the real website. Preying on a victim's trust, phishing can be classified as a form of social engineering. Attackers are using creative ways to gain access to real accounts. A common scam is for attackers to send fake electronic invoices to individuals showing that they recently purchased music, apps, or others, and instructing them to click on a link if the purchases were not authorized. A more strategic type of phishing is spear-phishing which leverages personal or organization-specific details to make the attacker appear like a trusted source. Spear-phishing attacks target specific individuals, rather than the broad net cast by phishing attempts.


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

import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class SocialEngineering extends Component {
  render() {
    return (
     
      <ScrollView style={styles.container}>
 <View style={styles.AppTittle}>
          <Text style={styles.TittleText}> Social Engineering</Text>
        </View>
        <Text style={styles.text}>
        Social engineering, in the context of computer security, aims to convince a user to disclose secrets such as passwords, card numbers, etc. or grant physical access by, for example, impersonating a senior executive, bank, contractor, or customer. This generally involves exploiting people's trust and relying on their cognitive biases. A common scam involves emails sent to accounting and finance department personnel, impersonating their CEO and urgently requesting some action. In early 2016, the FBI reported that such business email compromise (BEC) scams had cost US businesses more than $2 billion in about two years.
In May 2016, the Milwaukee Bucks NBA team was the victim of this type of cyber scam with a perpetrator impersonating the team's president Peter Feigin, resulting in the handover of all the team's employees' 2015 W-2 tax forms.

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

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class NetworkScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Network Security</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Network security consists of the policies, processes and practices
            adopted to prevent, detect and monitor unauthorized access, misuse,
            modification, or denial of a computer network and network-accessible
            resources. Network security involves the authorization of access to
            data in a network, which is controlled by the network administrator.
            Users choose or are assigned an ID and password or other
            authenticating information that allows them access to information
            and programs within their authority. Network security covers a
            variety of computer networks, both public and private, that are used
            in everyday jobs: conducting transactions and communications among
            businesses, government agencies and individuals. Networks can be
            private, such as within a company, and others that might be open to
            public access. Network security is involved in organizations,
            enterprises, and other types of institutions. It does as its title
            explains: it secures the network, as well as protects and oversees
            operations being done. The most common and simple way of protecting
            a network resource is by assigning it a unique name and a
            corresponding password.
          </Text>
          <Image
            source={require('../assets/ensuring_network_security_e34d6ce4bb.png')}
            style={styles.Image}
          />
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Concept</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Network security starts with authentication, commonly with a
            username and a password. Since this requires just one detail
            authenticating the user name—i.e., the password—this is sometimes
            termed one-factor authentication. With two-factor authentication,
            something the user 'has' is also used (e.g., a security token or
            'dongle', an ATM card, or a mobile phone); and with three-factor
            authentication, something the user 'is' is also used (e.g., a
            fingerprint or retinal scan).
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            Once authenticated, a firewall enforces access policies such as what
            services are allowed to be accessed by the network users. Though
            effective to prevent unauthorized access, this component may fail to
            check potentially harmful content such as computer worms or Trojans
            being transmitted over the network.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            Anti-virus software or an intrusion prevention system (IPS) helps
            detect and inhibit the action of such malware. An anomaly-based
            intrusion detection system may also monitor the network like
            Wireshark traffic and may be logged for audit purposes and for later
            high-level analysis. Newer systems combining unsupervised machine
            learning with full network traffic analysis can detect active
            network attackers from malicious insiders or targeted external
            attackers that have compromised a user's machine or account.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            Communication between two hosts using a network may be encrypted to
            maintain security and privacy. Honeypots, essentially decoy
            network-accessible resources, may be deployed in a network as
            surveillance and early-warning tools, as the honeypots are not
            normally accessed for legitimate purposes. Honeypots are placed at a
            point in the network where they appear vulnerable and undefended,
            but they are actually isolated and monitored. Techniques used by the
            attackers that attempt to compromise these decoy resources are
            studied during and after an attack to keep an eye on new
            exploitation techniques. Such analysis may be used to further
            tighten the security of the actual network being protected by the
            honeypot. A honeypot can also direct an attacker's attention away
            from legitimate servers. A honeypot encourages attackers to spend
            their time and energy on the decoy server while distracting their
            attention from the data on the real server. Similar to a honeypot, a
            honeynet is a network set up with intentional vulnerabilities. Its
            purpose is also to invite attacks so that the attacker's methods can
            be studied and that information can be used to increase network
            security. A honeynet typically contains one or more honeypots.
          </Text>
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Security management</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Security management for networks is different for all kinds of
            situations. A home or small office may only require basic security
            while large businesses may require high-maintenance and advanced
            software and hardware to prevent malicious attacks from hacking and
            spamming. In order to minimize susceptibility to malicious attacks
            from external threats to the network, corporations often employ
            tools that carry out network security verifications].
          </Text>
          <Image
            source={require('../assets/CIAJMK1209-en.svg.webp')}
            style={styles.Image}
          />
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Types of attack</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Networks are subject to attacks from malicious sources. Attacks can
            be from two categories: "Passive" when a network intruder intercepts
            data traveling through the network, and "Active" in which an
            intruder initiates commands to disrupt the network's normal
            operation or to conduct reconnaissance and lateral movements to find
            and gain access to assets available via the network.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  AppTittle: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(10),
  },
  TittleText: {
    flex: 0.07,
    color: 'white',
    fontSize: 28,
    marginTop: RFValue(5),
    borderWidth: 4,
    borderColor: 'lightblue',
  },
  TittleContainer: {
    marginTop: RFValue(30),
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  Image: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(20),
    resizeMode: 'contain',
  },
});

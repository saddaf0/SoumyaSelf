import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}> Cyber Security</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Computer security, cyber security , digital security or information
            technology security (IT security) is the protection of computer
            systems and networks from attack by malicious actors that may result
            in unauthorized information disclosure, theft of, or damage to
            hardware, software, or data, as well as from the disruption or
            misdirection of the services they provide.
          </Text>
          <Text style={styles.text}>
            The field is significant due to the expanded reliance on computer
            systems, the Internet, and wireless network standards such as
            Bluetooth and Wi-Fi. Also, due to the growth of smart devices,
            including smartphones, televisions, and the various devices that
            constitute the Internet of things (IoT). Cybersecurity is one of the
            most significant challenges of the contemporary world, due to both
            the complexity of information systems and the societies they
            support. Security is of especially high importance for systems that
            govern large-scale systems with far-reaching physical effects, such
            as power distribution, elections, and finance.
          </Text>
        </View>
        <Image
          source={require('../assets/1657711469335.png')}
          style={styles.Image}
        />
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}> Vulnerability</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            A vulnerability is a weakness in design, implementation, operation,
            or internal control. Most of the vulnerabilities that have been
            discovered are documented in the Common Vulnerabilities and
            Exposures (CVE) database. An exploitable vulnerability is one for
            which at least one working attack or exploit exists. Vulnerabilities
            can be researched, reverse-engineered, hunted, or exploited using
            automated tools or customized scripts. To secure a computer system,
            it is important to understand the attacks that can be made against
            it, and these threats can typically be classified into one of these
            categories below:
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => {
              this.props.navigation.navigate('BackDoor');
            }}>
            <Text style={styles.buttontext}>BackDoor</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => {
              this.props.navigation.navigate('DenialOfService');
            }}>
            <Text style={styles.buttontext}>Denial of service attacks</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => {
              this.props.navigation.navigate('DirectAccessAttacks');
            }}>
            <Text style={styles.buttontext}>Direct Access Attacks</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => {
              this.props.navigation.navigate('Phishing');
            }}>
            <Text style={styles.buttontext}>Phishing</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => {
              this.props.navigation.navigate('SideChanelAttacks');
            }}>
            <Text style={styles.buttontext}>Side Channel Attacks</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => {
              this.props.navigation.navigate('PrivelageEscalation');
            }}>
            <Text style={styles.buttontext}>Privelage Escalation</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => {
              this.props.navigation.navigate('SocialEngineering');
            }}>
            <Text style={styles.buttontext}>Social Engineering</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => {
              this.props.navigation.navigate('Spoofing');
            }}>
            <Text style={styles.buttontext}>Spoofing</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => {
              this.props.navigation.navigate('Tampering');
            }}>
            <Text style={styles.buttontext}>Tampering</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => {
              this.props.navigation.navigate('Malware');
            }}>
            <Text style={styles.buttontext}>Malware</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>
            {' '}
            Computer security incident management
          </Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Computer security incident management is an organized approach to
            addressing and managing the aftermath of a computer security
            incident or compromise with the goal of preventing a breach or
            thwarting a cyberattack. An incident that is not identified and
            managed at the time of intrusion typically escalates to a more
            damaging event such as a data breach or system failure. The intended
            outcome of a computer security incident response plan is to contain
            the incident, limit damage and assist recovery to business as usual.
            Responding to compromises quickly can mitigate exploited
            vulnerabilities, restore services and processes and minimize losses.
            Incident response planning allows an organization to establish a
            series of best practices to stop an intrusion before it causes
            damage. Typical incident response plans contain a set of written
            instructions that outline the organization's response to a
            cyberattack. Without a documented plan in place, an organization may
            not successfully detect an intrusion or compromise and stakeholders
            may not understand their roles, processes and procedures during an
            escalation, slowing the organization's response and resolution.
            There are four key components of a computer security incident
            response plan: Preparation: Preparing stakeholders on the procedures
            for handling computer security incidents or compromises Detection
            and analysis: Identifying and investigating suspicious activity to
            confirm a security incident, prioritizing the response based on
            impact and coordinating notification of the incident Containment,
            eradication and recovery: Isolating affected systems to prevent
            escalation and limit impact, pinpointing the genesis of the
            incident, removing malware, affected systems and bad actors from the
            environment and restoring systems and data when a threat no longer
            remains Post-incident activity: Post-mortem analysis of the
            incident, its root cause and the organization's response with the
            intent of improving the incident response plan and future response
            efforts.
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
  Button1: {
    marginTop: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    width: 200,
    height: 50,
    alignSelf: 'center',
  },
  buttontext: {
    color: '#15193c',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

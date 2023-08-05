import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CloudScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}> Cloud Security</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Cloud computing security or, more simply, cloud security refers to a
            broad set of policies, technologies, applications, and controls
            utilized to protect virtualized IP, data, applications, services,
            and the associated infrastructure of cloud computing. It is a
            sub-domain of computer security, network security, and, more
            broadly, information security.
          </Text>
          <Image
            source={require('../assets/what-is-cloud-security01.jpg')}
            style={styles.Image}
          />
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Security issues </Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Security concerns associated with cloud computing are typically
            categorised in two ways: as security issues faced by cloud providers
            (organisations providing software-, platform-, or
            infrastructure-as-a-service via the cloud) and security issues faced
            by their customers (companies or organisations who host applications
            or store data on the cloud). The responsibility is shared, however,
            and is often detailed in a cloud provider's "shared security
            responsibility model" or "shared responsibility model." The provider
            must ensure that their infrastructure is secure and that their
            client’s data and applications are protected, while the user must
            take measures to fortify their application and use strong passwords
            and authentication measures.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            When an organization elects to store data or host applications on
            the public cloud, it loses its ability to have physical access to
            the servers hosting its information. As a result, potentially
            sensitive data is at risk from insider attacks. According to a 2010
            Cloud Security Alliance report, insider attacks are one of the top
            seven biggest threats in cloud computing. Therefore, cloud service
            providers must ensure that thorough background checks are conducted
            for employees who have physical access to the servers in the data
            centre. Additionally, data centres are recommended to be frequently
            monitored for suspicious activity.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            To conserve resources, cut costs, and maintain efficiency, cloud
            service providers often store more than one customer's data on the
            same server. As a result, there is a chance that one user's private
            data can be viewed by other users (possibly even competitors). To
            handle such sensitive situations, cloud service providers should
            ensure proper data isolation and logical storage segregation.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            The extensive use of virtualization in implementing cloud
            infrastructure brings unique security concerns for customers or
            tenants of a public cloud service. Virtualization alters the
            relationship between the OS and underlying hardware – be it
            computing, storage or even networking. This introduces an additional
            layer – virtualization – that itself must be properly configured,
            managed and secured. Specific concerns include the potential to
            compromise the virtualization software, or "hypervisor". While these
            concerns are largely theoretical, they do exist. For example, a
            breach in the administrator workstation with the management software
            of the virtualization software can cause the whole data centre to go
            down or be reconfigured to an attacker's liking.
          </Text>
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Dimensions of Cloud security</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Cloud security engineering is characterized by the security layers,
            plan, design, programming, and best practices that exist inside a
            cloud security arrangement. Cloud security engineering requires the
            composed and visual model (design and UI) to be characterized by the
            tasks inside the Cloud. This cloud security engineering process
            includes such things as access to the executives, techniques, and
            controls to ensure applications and information. It also includes
            ways to deal with and keep up with permeability, consistency, danger
            stance, and by and large security. Processes for imparting security
            standards into cloud administrations and activities assume an
            approach that fulfils consistent guidelines and essential framework
            security parts.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            For interest in Cloud advancements to be viable, companies should
            recognize the various parts of the Cloud and how they remain to
            impact and help them. These interests may include investments in
            cloud computing and security, for example. This, of course, leads to
            leads to driving the push for Cloud advancements to succeed.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            Though the idea of cloud computing isn't new, associations are
            increasingly enforcing it because of its flexible scalability,
            relative trustability, and cost frugality of services. However,
            despite its rapid-fire relinquishment in some sectors and
            disciplines, it's apparent from exploration and statistics that
            security-related pitfalls are the most conspicuous hedge to its wide
            relinquishment.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            It is generally recommended that information security controls be
            selected and implemented according to and in proportion to the
            risks, typically by assessing the threats, vulnerabilities and
            impacts. Cloud security concerns can be grouped in various ways;
            Gartner named seven while the Cloud Security Alliance identified
            twelve areas of concern. Cloud access security brokers (CASBs) are
            software that sits between cloud users and cloud applications to
            provide visibility into cloud application usage, data protection and
            governance to monitor all activity and enforce security policies.
          </Text>
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Legal and contractual issues</Text>
        </View>
        <View>
          <Text style={[styles.text, { marginTop: 15 }]}>
            Aside from the security and compliance issues enumerated above,
            cloud providers and their customers will negotiate terms around
            liability (stipulating how incidents involving data loss or
            compromise will be resolved, for example), intellectual property,
            and end-of-service (when data and applications are ultimately
            returned to the customer). In addition, there are considerations for
            acquiring data from the cloud that may be involved in litigation.
            These issues are discussed in service-level agreements (SLA).
          </Text>
          <Image
            source={require('../assets/Supply_and_demand-stacked5-law.png')}
            style={styles.Image}
          />
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Public records</Text>
        </View>
        <View>
          <Text style={[styles.text, { marginTop: 15 }]}>
            Legal issues may also include record-keeping requirements in the
            public sector, where many agencies are required by law to retain and
            make available electronic records in a specific fashion. This may be
            determined by legislation, or law may require agencies to conform to
            the rules and practices set by a records-keeping agency. Public
            agencies using cloud computing and storage must take these concerns
            into account.
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

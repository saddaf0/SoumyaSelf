import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class IotScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Iot Security</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            The Internet of Things (IoT) describes devices with sensors,
            processing ability, software and other technologies that connect and
            exchange data with other devices and systems over the Internet or
            other communications networks. The Internet of Things encompasses
            electronics, communication and computer science engineering.
            Internet of Things has been considered a misnomer because devices do
            not need to be connected to the public internet, they only need to
            be connected to a network and be individually addressableincluding
            ubiquitous computing, commodity sensors, and increasingly powerful
            embedded systems, as well as machine learning. Older fields of
            embedded systems, wireless sensor networks, control systems, and
            automation (including home and building automation), independently
            and collectively enable the Internet of Things. In the consumer
            market, IoT technology is most synonymous with "smart home"
            products, including devices and appliances (lighting fixtures,
            thermostats, home security systems, cameras, and other home
            appliances) that support one or more common ecosystems[clarification
            needed] and can be controlled via devices associated with that
            ecosystem, such as smartphones and smart speakers. IoT is also used
            in healthcare systems.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            There are several concerns about the risks in the growth of IoT
            technologies and products, especially in the areas of privacy and
            security, and consequently, there have been industry and government
            moves to address these concerns, including the development of
            international and local standards, guidelines, and regulatory
            frameworks.
          </Text>
          <Image
            source={require('../assets/iot-devices-secuirty.jpg')}
            style={styles.Image}
          />
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Data storage</Text>
        </View>
        <View>
          <Text style={[styles.text, { marginTop: 15 }]}>
            A challenge for producers of IoT applications is to clean, process
            and interpret the vast amount of data that is gathered by the
            sensors. There is a solution proposed for the analytics of the
            information referred to as Wireless Sensor Networks. These networks
            share data among sensor nodes that are sent to a distributed system
            for the analytics of the sensory data. Another challenge is the
            storage of this bulk data. Depending on the application, there could
            be high data acquisition requirements, which in turn lead to high
            storage requirements. Currently, the Internet is already responsible
            for 5% of the total energy generated, and a "daunting challenge to
            power" IoT devices to collect and even store data remains.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            Data silos, although a common challenge of legacy systems, still
            commonly occur with the implementation of IoT devices, particularly
            within manufacturing. As there are a lot of benefits to be gained
            from IoT and IIoT devices, how the data is stored can present
            serious challenges without the principles of autonomy, transparency,
            and interoperability being considered. The challenges do not occur
            by the device itself, but by how databases are warehouses are set
            up. These challenges were commonly identified in manufacturers and
            enterprises which have begun upon digital transformation, and are
            part of the digital foundation, indicating that to receive the
            optimal benefits from IoT devices and for decision-making,
            enterprises will have to first re-align their data storing methods.
            These challenges were identified by Keller (2021) when investigating
            the IT and application landscape of I4.0 implementation within
            German M&E manufacturers.
          </Text>
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Security</Text>
        </View>
        <View>
          <Text style={[styles.text, { marginTop: 15 }]}>
            Security is the biggest concern in adopting Internet of Things
            technology, with concerns that rapid development is happening
            without appropriate consideration of the profound security
            challenges involved and the regulatory changes that might be
            necessary. The rapid development of the Internet of Things (IoT) has
            allowed billions of devices to connect to the network. Due to too
            many connected devices and the limitation of communication security
            technology, various security issues gradually appear in the IoT.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            Most of the technical security concerns are similar to those of
            conventional servers, workstations and smartphones. These concerns
            include using weak authentication, forgetting to change default
            credentials, unencrypted messages sent between devices, SQL
            injections, Man-in-the-middle attacks, and poor handling of security
            updates. However, many IoT devices have severe operational
            limitations on the computational power available to them. These
            constraints often make them unable to directly use basic security
            measures such as implementing firewalls or using strong
            cryptosystems to encrypt their communications with other devices -
            and the low price and consumer focus of many devices makes a robust
            security patching system uncommon.
          </Text>

          <Text style={[styles.text, { marginTop: 15 }]}>
            Rather than conventional security vulnerabilities, fault injection
            attacks are on the rise and targeting IoT devices. A fault injection
            attack is a physical attack on a device to purposefully introduce
            faults in the system to change the intended behaviour. Faults might
            happen unintentionally by environmental noises and electromagnetic
            fields. There are ideas stemming from control-flow integrity (CFI)
            to prevent fault injection attacks and system recovery to a healthy
            state before the fault.
          </Text>

          <Text style={[styles.text, { marginTop: 15 }]}>
            Internet of Things devices also have access to new areas of data,
            and can often control physical devices, so that even by 2014 it was
            possible to say that many Internet-connected appliances could
            already "spy on people in their own homes" including televisions,
            kitchen appliances, cameras, and thermostats. Computer-controlled
            devices in automobiles such as brakes, engines, locks, hood and
            trunk releases, horns, heat, and dashboards are vulnerable to
            attackers who have access to the onboard network. In some cases,
            vehicle computer systems are Internet-connected, allowing them to be
            exploited remotely. By 2008 security researchers had shown the
            ability to remotely control pacemakers without authority. Later
            hackers demonstrated remote control of insulin pumps and implantable
            cardioverter defibrillators.
          </Text>

          <Text style={[styles.text, { marginTop: 15 }]}>
            Poorly secured Internet-accessible IoT devices can also be subverted
            to attack others. In 2016, a distributed denial of service attack
            powered by the Internet of Things devices running the Mirai malware
            took down a DNS provider and major websites. The Mirai Botnet had
            infected roughly 65,000 IoT devices within the first 20 hours.
            Eventually, the infections increased to around 200,000 to 300,000
            infections. Brazil, Colombia and Vietnam made up 41.5% of the
            infections. The Mirai Botnet had singled out specific IoT devices
            that consisted of DVRs, IP cameras, routers and printers. The top
            vendors that contained the most infected devices were identified as
            Dahua, Huawei, ZTE, Cisco, ZyXEL and MikroTik. In May 2017, Junade
            Ali, a Computer Scientist at Cloudflare noted that native DDoS
            vulnerabilities exist in IoT devices due to a poor implementation of
            the Publish–subscribe pattern. These sorts of attacks have caused
            security experts to view IoT as a real threat to Internet services.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            The U.S. National Intelligence Council in an unclassified report
            maintains that it would be hard to deny "access to networks of
            sensors and remotely-controlled objects by enemies of the United
            States, criminals, and mischief makers... An open market for
            aggregated sensor data could serve the interests of commerce and
            security no less than it helps criminals and spies identify
            vulnerable targets. Thus, massively parallel sensor fusion may
            undermine social cohesion, if it proves to be fundamentally
            incompatible with Fourth Amendment guarantees against unreasonable
            search." In general, the intelligence community views the Internet
            of Things as a rich source of data.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            On 31 January 2019, the Washington Post wrote an article regarding
            the security and ethical challenges that can occur with IoT
            doorbells and cameras: "Last month, Ring got caught allowing its
            team in Ukraine to view and annotate certain user videos; the
            company says it only looks at publicly shared videos and those from
            Ring owners who provide consent. Just last week, a California
            family's Nest camera let a hacker take over and broadcast fake audio
            warnings about a missile attack, not to mention peer in on them when
            they used a weak password.”
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            There has been a range of responses to concerns over security. The
            Internet of Things Security Foundation (IoTSF) was launched on 23
            September 2015 with a mission to secure the Internet of Things by
            promoting knowledge and best practice. Its founding board is made of
            technology providers and telecommunications companies. In addition,
            large IT companies are continually developing innovative solutions
            to ensure the security of IoT devices. In 2017, Mozilla launched
            Project Things, which allows to route IoT devices through a safe Web
            of Things gateway. As per the estimates from KBV Research, the
            overall IoT security market would grow at a 27.9% rate during
            2016–2022 as a result of increasing infrastructural concerns and
            diversified usage of the Internet of Things.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            Governmental regulation is argued by some to be necessary to secure
            IoT devices and the more comprehensive Internet – as market
            incentives to connect IoT devices are insufficient. It was found
            that due to the nature of most of the IoT development boards, they
            generate predictable and weak keys which make it easy to be utilized
            by Man-in-the-middle attack. However, various hardening approaches
            were proposed by many researchers to resolve the issue of SSH's weak
            implementation and weak keys. IoT security within the field of
            manufacturing presents different challenges and varying
            perspectives. Within the EU and Germany, data protection is
            constantly referenced throughout the manufacturing and digital
            policy particularly that of I4.0. However, the attitude towards data
            security differs from the enterprise perspective whereas there is an
            emphasis on less data protection in the form of GDPR as the data
            being collected from IoT devices in the manufacturing sector does
            not display personal details. Yet, research has indicated that
            manufacturing experts are concerned about "data security for
            protecting machine technology from international competitors with
            the ever-greater push for interconnectivity".
          </Text>
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Safety</Text>
        </View>
        <View>
          <Text style={[styles.text, { marginTop: 15 }]}>
            IoT systems are typically controlled by event-driven smart apps that
            take as input either sensed data, user inputs, or other external
            triggers (from the Internet) and command one or more actuators
            towards providing different forms of automation. Examples of sensors
            include smoke detectors, motion sensors, and contact sensors.
            Examples of actuators include smart locks, smart power outlets, and
            door controls. Popular control platforms on which third-party
            developers can build smart apps that interact wirelessly with these
            sensors and actuators include Samsung's SmartThings, Apple's
            HomeKit, and Amazon's Alexa, among others.
          </Text>
          <Text style={[styles.text, { marginTop: 15 }]}>
            A problem specific to IoT systems is that buggy apps, unforeseen bad
            app interactions, or device/communication failures, can cause unsafe
            and dangerous physical states, e.g., "unlock the entrance door when
            no one is at home" or "turn off the heater when the temperature is
            below 0 degrees Celsius and people are sleeping at night". Detecting
            flaws that lead to such states, requires a holistic view of
            installed apps, component devices, their configurations, and more
            importantly, how they interact. Recently, researchers from the
            University of California Riverside have proposed IotSan, a novel
            practical system that uses model checking as a building block to
            reveal "interaction-level" flaws by identifying events that can lead
            the system to unsafe states. They have evaluated IotSan on the
            Samsung SmartThings platform. From 76 manually configured systems,
            IotSan detects 147 vulnerabilities (i.e., violations of safe
            physical states/properties).
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

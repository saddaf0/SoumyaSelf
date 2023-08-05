import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class ApplicationScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}> Application Security</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Application security (short AppSec) includes all tasks that
            introduce a secure software development life cycle to development
            teams. Its final goal is to improve security practices and, through
            that, to find, fix and preferably prevent security issues within
            applications. It encompasses the whole application life cycle from
            requirements analysis, design, implementation, verification as well
            as maintenance.
          </Text>
          <Image
            source={require('../assets/download.jpg')}
            style={styles.Image}
          />
          <View style={styles.AppTittle}>
            <Text style={styles.TittleText}> Aproaches</Text>
          </View>
          <Text style={styles.text}>
            Different approaches will find different subsets of the security
            vulnerabilities lurking in an application and are most effective at
            different times in the software lifecycle. They each represent
            different tradeoffs of time, effort, cost and vulnerabilities found.
            1.Design review. Before code is written the application's
            architecture and design can be reviewed for security problems. A
            common technique in this phase is the creation of a threat model.
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            2.Whitebox security review, or code review. This is a security
            engineer deeply understanding the application through manually
            reviewing the source code and noticing security flaws. Through
            comprehension of the application, vulnerabilities unique to the
            application can be found.
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            3.Blackbox security audit. This is only through the use of an
            application testing it for security vulnerabilities, no source code
            is required.
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            4.Automated Tooling. Many security tools can be automated through
            inclusion into the development or testing environment. Examples of
            those are automated DAST/SAST tools that are integrated into code
            editors or CI/CD platforms.
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            5.Coordinated vulnerability platforms. These are hacker-powered
            application security solutions offered by many websites and software
            developers by which individuals can receive recognition and
            compensation for reporting bugs.
          </Text>
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}> Web application security</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Web application security is a branch of information security that
            deals specifically with the security of websites, web applications,
            and web services. At a high level, web application security draws on
            the principles of application security but applies them specifically
            to the internet and web systems. Web Application Security Tools are
            specialized tools for working with HTTP traffic, e.g., Web
            application firewalls.
          </Text>
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Security threats </Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            The Open Web Application Security Project (OWASP) provides free and
            open resources. It is led by a non-profit called The OWASP
            Foundation. The OWASP Top 10 - 2017 results from recent research
            based on comprehensive data compiled from over 40 partner
            organizations. This data revealed approximately 2.3 million
            vulnerabilities across over 50,000 applications. According to the
            OWASP Top 10 - 2021, the ten most critical web application security
            risks include:
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            1. Broken access control
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            2. Cryptographic Failures
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>3. Injection</Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            4. Insecure Design
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            5. Security Misconfiguration
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            6. Vulnerable and Outdated Components
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            7. Identification and Authentification Failures
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            8. Software and Data Integrity Failures
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            9. Security Logging and Monitoring Failures*
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            10. Server-Side Request Forgery (SSRF)*
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}></Text>
        </View>
        <View style={styles.AppTittle}>
          <Text style={styles.TittleText}>Tooling for security testing</Text>
        </View>
        <View style={styles.TittleContainer}>
          <Text style={styles.text}>
            Security testing techniques scour for vulnerabilities or security
            holes in applications. These vulnerabilities leave applications open
            to exploitation. Ideally, security testing is implemented throughout
            the entire Software Development Life Cycle (SDLC) so that
            vulnerabilities may be addressed in a timely and thorough manner.
            There are many kinds of automated tools for identifying
            vulnerabilities in applications. Common tool categories used for
            identifying application vulnerabilities include:
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            1. Static Application Security Testing (SAST) analyzes source code
            for security vulnerabilities during an application's development.
            Compared to DAST, SAST can be utilized even before the application
            is in an executable state. As SAST has access to the full source
            code it is a white-box approach. This can yield more detailed
            results but can result in many false positives that need to be
            manually verified.
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            2. Dynamic Application Security Testing (DAST, often called
            Vulnerability scanners) automatically detects vulnerabilities by
            crawling and analyzing websites. This method is highly scalable,
            easily integrated and quick. DAST tools are well suited for dealing
            with low-level attacks such as injection flaws but are not well
            suited to detect high-level flaws, e.g., logic or business logic
            flaws.Fuzzing tools are commonly used for input testing.
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            3. Interactive Application Security Testing (IAST) assesses
            applications from within using software instrumentation. This
            combines the strengths of both SAST and DAST methods as well as
            providing access to code, HTTP traffic, library information, backend
            connections and configuration information. Some IAST products
            require the application to be attacked, while others can be used
            during normal quality assurance testing.
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            4. Runtime application self-protection augments existing
            applications to provide intrusion detection and prevention from
            within an application runtime.
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            5. Dependency scanners (also called Software Composition Analysis)
            try to detect the usage of software components with known
            vulnerabilities. These tools can either work on-demand, e.g., during
            the source code build process, or periodically.
          </Text>

          <Text style={[styles.text, { marginTop: 10 }]}>
            6. Abstraction is the idea of making more complex things less
            complex.
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

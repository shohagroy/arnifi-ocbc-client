import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 30,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
    paddingBottom: 20,
  },
  footer: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 30,
    paddingTop: 20,
    borderTop: "1px solid #ddd",
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
    color: "#1F3C4A",
  },
  details: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

const WillPdfDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Heading */}
        <View style={styles.header}>
          <Text>Last Will and Testament of</Text>
          <Text>Personal Full Name</Text>
        </View>

        {/* Main Content */}
        <View style={{ textAlign: "center", padding: "100px 0" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            LAST WILL AND TESTAMENT OF
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
            Personal Full Name
          </Text>
        </View>

        {/* Footer */}
        <View style={{ padding: "50px 0" }}>
          <View style={{ backgroundColor: "gray", padding: 10 }}>
            <Text>Please note the following:</Text>
          </View>
          <Text style={{ fontSize: 12, marginTop: 10 }}>
            <ol>
              <li>Please Print</li>
              <li>
                Sign it before two (2) witnesses (These 2 witnesses must be of
                sound mind, be above the age of 21 years old, and must not be
                beneficiaries under the Will)
              </li>
              <li>
                Store it in a safe location. We recommend a safe deposit box.
              </li>
              <li>
                Consider notifying the Will Registry that your Will has been
                made.
              </li>
              <li>
                Inform Your executors of their role and the location of the
                Will.
              </li>
            </ol>
          </Text>
        </View>
      </Page>

      {/* Additional Page (You can customize this based on your requirements) */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>Last Will and Testament of</Text>
          <Text>Personal Full Name</Text>
        </View>

        <View>
          <Text style={styles.text}>Invoice to:</Text>
          <Text style={styles.text}>Name: John Doe</Text>
          <Text style={styles.text}>Email: john.doe@example.com</Text>
          <Text style={styles.text}>Payment ID: ABC123</Text>
          <Text style={styles.text}>Booking ID: XYZ789</Text>
          <Text style={styles.text}>Amount: $100 USD</Text>
        </View>

        <View style={styles.footer}>
          <Text>Thank you for your booking!</Text>
        </View>
      </Page>
    </Document>
  );
};

export default WillPdfDocument;

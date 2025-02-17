import React, { Fragment } from "react";
import {
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";
import { DailySumaryProps } from "@/app/types/pdf";
import { formatNumber } from "@/lib/utils";

Font.register({
  family: "PatronWEB",
  src: "/static/fonts/pdf/PatronWEB-Regular.ttf",
});
Font.register({
  family: "PatronWEB-Bold",
  src: "/static/fonts/pdf/PatronWEB-Bold.ttf",
});

const borderColor = "#90e5fc";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    fontFamily: "PatronWEB",
  },

  section: {
    flexGrow: 1,
    padding: 15,
  },

  sectionGroup: {
    paddingVertical: 10,
  },

  sectionGroupTitle: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "PatronWEB-Bold",
    marginBottom: 5,
  },

  pageNumber: {
    position: "absolute",
    fontSize: 12,
    paddingVertical: 40,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "red",
  },

  pageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "PatronWEB-Bold",
  },

  ticket: {
    // flexGrow: 1,
    borderWidth: 1,
    width: "60%",
    borderColor: "#DDDDE4",
    alignSelf: "center",
    margin: 10,
  },

  ticketQr: {
    width: "150px",
    height: "150px",
    alignSelf: "center",
    margin: 20,
  },

  line: {
    paddingVertical: 10,
  },

  lineHeading: {
    fontSize: 12,
    color: "#6B7790",
  },

  descriptionText: {
    fontSize: 10,
    color: "#6B7790",
  },

  lineBigText: {
    fontSize: 18,
    color: "#292c33",
    fontFamily: "PatronWEB-Bold",
  },

  lineText: {
    fontSize: 14,
    color: "#292c33",
    fontFamily: "PatronWEB-Bold",
    textTransform: "capitalize",
  },

  spacer: {
    height: 10,
  },

  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  separator: {
    flex: 1,
    height: "0.5px",
    backgroundColor: "#DDDDE4",
  },

  separatorCard: {
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: "0.5px",
    borderColor: "#DDDDE4",
    borderRadius: 30,
    fontSize: 12,
    fontFamily: "PatronWEB-Bold",
  },

  row: {
    flexDirection: "row",
    borderBottomColor: "#3b82f6",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  column0: {
    width: "55%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingRight: 8,
    fontSize: 12,
  },
  column1: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    borderLeftColor: borderColor,
    borderLeftWidth: 1,
    textAlign: "right",
    paddingRight: 8,
    fontSize: 12,
  },
  column2: {
    width: "40%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    fontSize: 12,
  },
  column3: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
    fontSize: 12,
  },
  column4: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
    fontSize: 12,
  },

  column5: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
    fontSize: 12,
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },

  tableHead: {
    fontSize: 12,
    backgroundColor: "#3b82f6",
    display: "flex",
    flexDirection: "row",
  },
});

const DailySumaryDocument = ({ items }: DailySumaryProps) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.pageTitle}>Résumé global des activité</Text>

          {items.map((item, x) => (
            <View key={x} style={styles.sectionGroup}>
              <Text style={styles.sectionGroupTitle}>
                Activité dans {item.name}
              </Text>

              <View style={styles.tableHead}>
                <Text style={styles.column1}>Identifiant</Text>
                <Text style={styles.column2}>Agent</Text>
                <Text style={styles.column3}>Tickets</Text>
                <Text style={styles.column4}>Recettes CDF</Text>
                <Text style={styles.column5}>Recettes USD</Text>
              </View>
              <TableRow items={item.items} />
              <View style={styles.row}>
                <Text style={styles.column0}>Total</Text>
                <Text style={styles.column3}>{item.items.reduce((acc, cur) => acc + cur.ticketsCount, 0)}</Text>
                <Text style={styles.column4}>
                  FC.{" "}
                  {formatNumber(
                    item.items.reduce((acc, cur) => acc + cur.cdfTotal, 0)
                  )}
                </Text>
                <Text style={styles.column5}>
                  $.{" "}
                  {formatNumber(
                    item.items.reduce((acc, cur) => acc + cur.usdTotal, 0)
                  )}
                </Text>
              </View>

              {/** {item.items.map((row, rowKey) => (
                <View style={styles.row} key={rowKey}>
                  <Text style={styles.description}>{row.username}</Text>
                  <Text style={styles.qty}>{row.username}</Text>
                  <Text style={styles.rate}>{row.username}</Text>
                  <Text style={styles.amount}>{row.usdTotal.toFixed(2)}</Text>
                </View>
              ))} */}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const TableRow = ({
  items,
}: {
  items: {
    id: string;
    name: string;
    username: string;
    ticketsCount: number;
    cdfTotal: number;
    usdTotal: number;
  }[];
}) => {
  const rows = items.map((item) => (
    <View style={styles.row} key={item.id}>
      <Text style={styles.column1}>{item.username}</Text>
      <Text style={styles.column2}>{item.name}</Text>
      <Text style={styles.column4}>{item.ticketsCount}</Text>
      <Text style={styles.column4}>{formatNumber(item.cdfTotal, 2)}</Text>
      <Text style={styles.column5}>{formatNumber(item.usdTotal)}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default DailySumaryDocument;

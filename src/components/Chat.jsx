import axios from "axios";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { Button } from "@mui/material";
import { useState } from "react";


const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 10,
  },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {data.map((item, index) => (
        <View key={index} style={styles.section}>
          <Text>Question: {item.question}</Text>
          <Text>Answer: {item.answer}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default function Chat(props) {
  // const [data, setData] = useState(null);
  const chats = props.chats;
  const onDownloadButtonClick = () => {
    if(chats){
      const asPdf = pdf(<MyDocument data={chats} />);
          asPdf.toBlob().then((blob) => {
            console.log("Blob:", blob); // debugging line
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `chat.pdf`;
            link.click();
            URL.revokeObjectURL(url);
          });
    }


  };

  return (
    <div >
      <Button variant="contained" sx={{color:"white"}}   onClick={onDownloadButtonClick}>
        Download
      </Button>
    </div>
  );
}
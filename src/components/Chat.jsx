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

  const onDownloadButtonClick = () => {
    axios
      .get(`https://gpt6-backend.onrender.com/chat-history`, {
        params: {
          name_space: props.namespace,
        },
      })
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        // setData(data);
        if (data) {
          const asPdf = pdf(<MyDocument data={data} />);
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
      })
      .catch((error) => {
        console.error(
          "An error occurred while fetching the chat history",
          error
        );
      });
  };

  return (
    <div className="flex-1">
      <Button style={{ marginTop: "3%" }} onClick={onDownloadButtonClick}>
        Download
      </Button>
    </div>
  );
}
// import { Container, Text } from "native-base";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { Container, Content, Card, CardItem, Text } from "native-base";
function CarDetailsScreen({ route }) {
  recievedItem = route.params?.sendingItem;
  return (
    <Container>
      <Content>
        <Card>
          <CardItem cardBody>
            <Image
              source={{ uri: recievedItem.imageUrl }}
              style={{ height: 300, width: null, flex: 1 }}
            />
          </CardItem>
        </Card>
        <Text style={styles.heading}>Car Details :</Text>
        <Text style={styles.text}>Car Make : {recievedItem.carMake}</Text>
        <Text style={styles.text}>Car Model : {recievedItem.carModel}</Text>
        <Text style={styles.text}>Car Year : {recievedItem.carYear}</Text>
        <Text style={styles.text}>Car Power : {recievedItem.carPower}cc</Text>
        <Text style={styles.text}>Car Color : {recievedItem.carColor}</Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    paddingTop: 25,
    paddingHorizontal: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  text: {
    paddingTop: 25,
    paddingHorizontal: 20,
    marginLeft: 20,
    fontSize: 22,
  },
});
export default CarDetailsScreen;

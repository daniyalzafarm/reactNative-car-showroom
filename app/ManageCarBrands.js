import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";

import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Text,
  Thumbnail,
  H2,
} from "native-base";
import colors from "./config/colors";

const DATA = [
  {
    id: "1",
    title: "BMW Motors",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/11/26/automotive-1838744_960_720.jpg",
  },
  {
    id: "2",
    title: "Daimler Motors",
    image:
      "https://cdn.pixabay.com/photo/2014/04/15/12/28/mercedes-324744_960_720.jpg",
  },
  {
    id: "3",
    title: "Ford Motors",
    image:
      "https://cdn.pixabay.com/photo/2020/03/15/15/14/ford-4933928_960_720.jpg",
  },
  {
    id: "4",
    title: "General Motors",
    image:
      "https://cdn.pixabay.com/photo/2016/01/19/18/14/pontiac-1150113_960_720.jpg",
  },
  {
    id: "5",
    title: "Honda Motors",
    image:
      "https://cdn.pixabay.com/photo/2017/08/07/00/28/red-2597961_960_720.jpg",
  },
  {
    id: "6",
    title: "Hyundai Motors",
    image:
      "https://cdn.pixabay.com/photo/2017/08/27/02/17/car-grill-2685049_960_720.jpg",
  },
  {
    id: "7",
    title: "Nissan Motors",
    image:
      "https://cdn.pixabay.com/photo/2014/09/10/00/10/nissan-440488_960_720.jpg",
  },
  {
    id: "8",
    title: "SAIC Motors",
    image:
      "https://cdn.pixabay.com/photo/2017/09/01/20/23/ford-2705402_960_720.jpg",
  },
  {
    id: "9",
    title: "Toyota Motors",
    image:
      "https://cdn.pixabay.com/photo/2016/02/07/13/14/toyota-1184618_960_720.jpg",
  },
  {
    id: "10",
    title: "Volks Wegan Motors",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/18/07/automotive-1846910_960_720.jpg",
  },
];
function ManageCarBrands(props) {
  return (
    <Container>
      <H2 style={styles.heading}>List of Car Brands</H2>
      <List>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Content>
              <ListItem
                style={{
                  backgroundColor: colors.light,
                  margin: 5,
                }}
              >
                <Left style={{ justifyContent: "center" }}>
                  <Thumbnail
                    square
                    large
                    source={{
                      uri: item.image,
                    }}
                  />
                </Left>
                <Body>
                  <Text>{item.title}</Text>
                </Body>
              </ListItem>
            </Content>
          )}
        />
      </List>
    </Container>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: Constants.statusBarHeight,
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    width: "100%",
    backgroundColor: colors.primary,
    color: "white",
  },
});
export default ManageCarBrands;

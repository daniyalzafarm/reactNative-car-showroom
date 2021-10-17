import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Body,
  Text,
  Thumbnail,
} from "native-base";
import colors from "./config/colors";
function ListOfCars({ navigation }) {
  const [carsData, setCarsData] = useState();
  const [carKeys, setCarsKeys] = useState();

  const fetchData = async () => {
    const response = await fetch(
      "https://react-native-9ff35-default-rtdb.firebaseio.com/cars.json"
    );

    const cars = await response.json();

    var keys;
    var data;

    if (cars != null) {
      keys = Object.keys(cars);
      data = Object.values(cars);

      setCarsData(data);
      setCarsKeys(keys);
    }
    // console.log(data);
    // console.log(carKeys);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (index) => {
    var requestOptions = {
      method: "DELETE",
    };
    if (carKeys) {
      const response = await fetch(
        `https://react-native-9ff35-default-rtdb.firebaseio.com/cars/${carKeys[index]}.json`,
        requestOptions
      );
    }
    navigation.navigate("ManageCarList");
  };
  const handlePressCar = (item) => {
    navigation.navigate("CarDetailsScreen", { sendingItem: item });
  };
  return (
    <Container>
      <List>
        <FlatList
          data={carsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Content>
              <ListItem
                style={{
                  backgroundColor: colors.light,
                  margin: 5,
                }}
                onPress={() => handlePressCar(item)}
              >
                <Left style={{ justifyContent: "center" }}>
                  <Thumbnail
                    square
                    large
                    source={{
                      uri: item.imageUrl,
                    }}
                  />
                </Left>
                <Body>
                  <Text>
                    {item.carMake} {item.carModel}
                  </Text>
                </Body>
                <Right>
                  <TouchableOpacity onPress={() => handleDelete(index)}>
                    <MaterialCommunityIcons
                      name="delete"
                      size={30}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                </Right>
              </ListItem>
            </Content>
          )}
        />
      </List>
    </Container>
  );
}

export default ListOfCars;

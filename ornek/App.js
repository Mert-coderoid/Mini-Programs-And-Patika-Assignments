import axios from "axios";
import React, { Component, PropTypes } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:5000/users").then((response) => {
      this.setState({ users: response.data });
    });
  }

  renderItem = ({ item }) => {
    return (
      <View style={this.styles.usersItem}>
        <TouchableOpacity onPress={() => {
          alert(item.email)
        }}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  styles = StyleSheet.create({
    usersItem: {
      maring: 5,
      borderWidth: 1.5,
      borderColor: "black",
      borderRadius: 5,
      flexDirection: "row",
    },
  });

  render() {
    return (
      <View>
        <FlatList
          data={this.state.users}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

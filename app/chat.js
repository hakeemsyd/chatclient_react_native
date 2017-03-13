import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight } from 'react-native';

export default class chat extends Component {
	static navigationOptions = {
		title: 'Chatroom'
	}

	constructor(props) {
		super(props);
		this.state = { msg: ''};
	}

	onPress() {
		console.log(this.state.msg);	
	} 

	render() {
		const { params } = this.props.navigation.state;
		return (
			
			<Text>
				Hello {params.username}
			</Text>
		)
	}
}

const styles = StyleSheet.create({
});

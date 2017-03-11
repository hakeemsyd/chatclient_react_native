import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight } from 'react-native';

export default class chat extends Component {
	constructor(props) {
		super(props);
		this.state = { msg: ''};
	}

	onPress() {
		console.log(this.state.msg);	
	} 

	render() {
		return (
			
			<Text>
				Hello
			</Text>
		)
	}
}

const styles = StyleSheet.create({
});

import {
	AppRegistry,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import login from './login';
import chat from './chat';

const ChatClient = StackNavigator({
	Login: { screen: login },
	Chat: { screen: chat }
});

AppRegistry.registerComponent('chatclient_react_native', () => ChatClient);


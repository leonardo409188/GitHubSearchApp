import { Linking } from 'react-native';

export async function openURL(url) {
	const supported = await Linking.canOpenURL(url);

	if (supported) {
		await Linking.openURL(url);
	} else {
		console.log(`Don't know how to open this URL: ${url}`);
	}
};

import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		console.log(e);
	}
}

export const getData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key)
		if (value !== null) {
			return JSON.parse(value);
		}
	} catch (e) {
		console.log(e);
	}
}

export const handleStorage = async (user, picture, type) => {
	const users = await getData('favorites');

	if (!type) {  // type === false, ou seja...vai setar o usuário no storage
		const newUser = mountUser(user, picture);

		if (users) {
			const newListUser = [...users, newUser];
			await storeData('favorites', JSON.stringify(newListUser));

		} else {
			const firtsUser = [newUser];
			await storeData('favorites', JSON.stringify(firtsUser));
		}

		return true;
	} else {   // type === true, ou seja, vai retirar o usuário do storage
		const removedUser = users.filter(el => el.login !== user);
		await storeData('favorites', JSON.stringify(removedUser));

		return false;
	}
}

export const removeData = async (key) => {
	try {
		await AsyncStorage.removeItem('favorites');
	} catch (e) {
		console.log(e);
	}
}

const mountUser = (user, picture) => {
	return {
			'login': user,
			'avatar_url': picture
		}
}

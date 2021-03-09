import React, { useEffect, useState } from 'react';
import { getData, handleStorage } from '../../utils/functions';
import { Header, List } from '../../components';
import { BackgroundContainer, ContentContainer } from '../../styles/common';
import { Title, UsersList } from './styles';

const Favorites = ({ navigation }) => {
	const [favorites, setFavorites] = useState(null);

	useEffect(() => {
		const allFavorites = navigation.addListener('focus', () => {
			getFavorites();
		});

		return allFavorites;
	}, [navigation]);

	const getFavorites = async () => {
		const fav = await getData('favorites');

		if (fav) {
			setFavorites([...fav]);
		}
	}

	const removeFavorite = async (user, picture, type) => {
		await handleStorage(user, picture, type);
		const updatedFavorites = favorites.filter(el => el.login !== user);
		setFavorites(updatedFavorites);
	}

	const renderFavorites = ({ item }) => (
		<List 
			data={item} 
			type={'favorite'} 
			onPressIcon={() => removeFavorite(item.login, item.avatar_url, true)}
			onPressList={() => navigation.navigate('Repositories', { user: item.login, picture: item.avatar_url })} 
		/>
	);

	return (
		<BackgroundContainer>
			<Header />
			<ContentContainer>
				<Title>{'Meus Favoritos'}</Title>
				<UsersList
					data={favorites}
					renderItem={renderFavorites}
					keyExtractor={(item) => item.login}
				/>
			</ContentContainer>
		</BackgroundContainer>
	);
}

export default Favorites;

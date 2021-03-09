import React, { useEffect, useState, useCallback } from 'react';
import { Header } from '../../components';
import { getRepositories } from '../../service/functions';
import { getData, handleStorage, openURL } from '../../utils/functions';
import { BackgroundContainer, ContentContainer } from '../../styles/common';
import {
	FavoriteView,
	ProfileText,
	ViewIcon,
	FavIcon,
	Item,
	ItemIcon,
	InfosView,
	RepositoriesView,
	RepositoriesList,
	RepoName,
	RepoDescription,
} from './styles';

const Repositories = ({ route }) => {
	const [repositories, setRepositories] = useState([]);
	const [isFavorite, setIsFavorite] = useState(false);
	const [page, setPage] = useState(1);
	const { user, picture } = route.params;

	useEffect(() => {
		checkFavorite();
		getRepo();
	}, [])

	const checkFavorite = async () => {
		const users = await getData('favorites');

		if (users) {
			const isFav = users.some(el => el.login === user); 
			setIsFavorite(isFav);

		} else {
			setIsFavorite(false);
		}
	}

	const getRepo = async () => {
		try {
			const response = await getRepositories(user, page);
			setRepositories([...repositories, ...response]);
			setPage(page + 1);

		} catch (error) {
			console.log(error);
		}

	}

	const handleFavorite = async () => {
		try {
			const newFavorite = await handleStorage(user, picture, isFavorite);
			setIsFavorite(newFavorite);

		} catch (error) {
			console.log(error);
		}
	}

	const renderRepositories = useCallback(({ item }) => 
		<Item onPress={() => openURL(item.svn_url)}>
			<ItemIcon />
			<InfosView>
				<RepoName>{item.name}</RepoName>
				{ item.description !== null && <RepoDescription> {item.description} </RepoDescription> }
			</InfosView>
		</Item>, []
	);

	const keyExtractor = useCallback((item) => item.name, []);

	return (
		<BackgroundContainer>
			<Header />
			<ContentContainer>
				<FavoriteView>
					<ProfileText> {`Favoritar ${user}?`} </ProfileText>
					<ViewIcon onPress={() => handleFavorite()}>
						<FavIcon isFavorite={isFavorite} />
					</ViewIcon>
				</FavoriteView>
				<RepositoriesView>
					<RepositoriesList
						data={repositories}
						renderItem={renderRepositories}
						keyExtractor={keyExtractor}
					  	onEndReached={() => repositories.length > 9 && getRepo()}
						onEndReachedThreshold={0.1}
					/>
				</RepositoriesView>
			</ContentContainer>
		</BackgroundContainer>
	)
}

export default Repositories;

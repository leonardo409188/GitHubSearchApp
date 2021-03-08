import styled, { css } from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const FavoriteView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ProfileText = styled.Text`
    color: #D1C9C9;
    font-size: 18px;
`

export const ViewIcon = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    background-color: #E0E2E3;
`

export const FavIcon = styled(Icon).attrs({
	name: 'heart',
})`
    color: ${props => props.isFavorite ? '#C46683' : '#fff'};
    font-size: 24px;
`

export const RepositoriesList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})``

export const RepositoriesView = styled.View`
    margin-top: 20px;
    flex: 1;
`

export const Item = styled.TouchableOpacity`
    flex-direction: row;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    align-items: center;
    margin-bottom: 10px;
`

export const ItemIcon = styled(Icon).attrs({
	name: 'folder',
})`
    color:  #7EB6FF;
    font-size: 34px;
    margin-right: 15px;
`

export const InfosView = styled.View`
`
export const RepoName = styled.Text`
    color: #040404;
    font-size: 16px;
`
export const RepoDescription = styled.Text`
    color: #D6D6D6;
    font-size: 10px;
`

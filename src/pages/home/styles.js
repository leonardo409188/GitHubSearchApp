import styled, { css } from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const FormView = styled.View`
    flex-direction: row;
    justify-content: center;
`

export const InputUser = styled.TextInput.attrs({
	placeholder: 'Buscar usuário',
})`
    height: 50px;
    padding: 10px;
    border-color: #D1C9C9;
    border-width: .8px;
    border-radius: 8px;
    flex: 3;
`

export const SearchButton = styled.TouchableOpacity`
    flex: 1;
    height: 50px;
    background-color: #018AFF;
    border-radius: 8px;
    margin-left: 5px;
    align-items: center;
    justify-content: center;

    ${props => props.disabled && css`
        background-color: #D1C9C9;
    `}
`

export const IconButton = styled(Icon).attrs({
	name: 'search',
})`
    color: #fff;
    font-size: 25px;
`

export const ActivityIndicator = styled.ActivityIndicator.attrs({
    color: '#fff',
})``

export const WithoutUserContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const WithoutUserIcon = styled.Image.attrs({
    source: require('../../assets/images/withoutUser.png'),
    resizeMode: 'contain'
})`
    height: 180px;
    margin-bottom: 10px;
`

export const WithoutUserTitle = styled.Text`
    color: #D1C9C9;
    font-size: 18px;
    text-align: center;
`

export const UsersList = styled.FlatList``

export const UsersContainer = styled.View`
    padding: 30px 0px;
`

export const UsersTitle = styled.Text`
    color: #D1C9C9;
    margin-bottom: 15px;
    font-size: 18px;
`

export const Item = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
`

export const ProfileView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const UserImage = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 8px;
`

export const UserName = styled.Text`
    color: #D1C9C9;
    margin-left: 20px;
    font-size: 17px;
`

export const ItemIcon = styled(Icon).attrs({
	name: 'chevron-right',
})`
    color:  #D1C9C9;
`  

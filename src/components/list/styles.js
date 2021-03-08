import styled, { css } from "styled-components/native";
import ListIcon from 'react-native-vector-icons/FontAwesome';

export const Item = styled.TouchableOpacity`
    flex-direction: row;
    padding: 10px 0px 10px 10px;
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

export const IconView = styled.TouchableOpacity`
    padding: 10px;
`

export const Icon = styled(ListIcon).attrs(props => ({
	name: props.type === 'favorite' ? 'trash' : 'chevron-right',
}))`
    color: ${props => props.type === 'favorite' ? '#C46683' : '#D1C9C9'};
    ${props => props.type === 'favorite' && css`
        font-size: 28px;
    `}
`
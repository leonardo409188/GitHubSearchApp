import styled, { css } from "styled-components/native";
import HeaderIcon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
const height = Dimensions.get('window').height;

export const HeaderContainer = styled.View`
    flex: 1;
    background-color: transparent;
    align-items: flex-end;
    padding-right: 15px;
    justify-content: center; 
`

export const Logo = styled(HeaderIcon).attrs({
	name: 'github',
})`
    color: #898383;
    font-size: ${height * .15}px;
`
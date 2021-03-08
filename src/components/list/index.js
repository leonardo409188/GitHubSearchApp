import React from 'react';
import {
	Item,
	ProfileView,
	UserImage,
	UserName,
	Icon,
	IconView
} from './styles';

export const List = ({ data, type, onPressList, onPressIcon }) => {
    return (
        <Item onPress={onPressList}>
            <ProfileView>
                <UserImage source={{ uri: data.avatar_url }} />
                <UserName> {data.login} </UserName>
            </ProfileView>
            <IconView onPress={onPressIcon}>
                <Icon type={type} />
            </IconView>
        </Item>
    )
}

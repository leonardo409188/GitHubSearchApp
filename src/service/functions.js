import api from './httpConfig';

export async function getUsers(user) {
    try {
        const response = await api.get(`/search/users?q=${user}`);

        return response.data.items;

    } catch (error) {
        console.log(error);
    }
}

export async function getRepositories(user, page) {
    try {
        console.log('chamou api', user, page)
        const response = await api.get(`/users/${user}/repos?page=${page}&per_page=15`);

        return response.data;

    } catch (error) {
        console.log(error);
    }
}

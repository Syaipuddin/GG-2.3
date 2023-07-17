import users from './json/user.json' assert { type : "json"};

export const getUserByIDRepo = (id) => {

    const user = users.find((e)=> e.userId === Number(id));

    if(!user) {
        throw new Error('User tidak ditemukan');
    }

    return user;
}

export const addNewUserRepo = ( username ) => {

    const newUser = {
        userId : users.length + 1,
        username : username,
        playlists : [],
    }

    users.push(newUser);

    return newUser;
}

export const getAllUserRepo = () => {

    if(!users) {
        throw new Error('Tidak ada User!')
    }

    return users;

}
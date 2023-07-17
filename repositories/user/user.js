import users from './json/user.json' assert { type : "json"};

export const getUserByIDRepo = (id) => {

    const user = users.find((e)=> e.userId === Number(id));

    if(!user) {
        throw new Error('User tidak ditemukan');
    }

    return user;
}

export const addNewUserRepo = ( username ) => {

    try {
        const newUser = {
            userId : users.length + 1,
            username : username,
            playlists : [],
        }
    
        users.push(newUser);
    
        return newUser;

    } catch(err) {

        throw new Error('Terjadi Kesalahan ketika Tambah User!');
    }
}

export const getAllUserRepo = () => {

    if(!users) {
        throw new Error('Tidak ada User!')
    }

    return users;

}
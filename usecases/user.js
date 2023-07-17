import { addNewUserRepo, getUserByIDRepo, getAllUserRepo } from "../repositories/user/user.js";

export const getUserByIDUsecase = (userId) => {

    const user = getUserByIDRepo(userId);

    if(!user) {
        return null;
    }

    return user;
}

export const addNewUserUsecase = (username) => {

    const newUser = addNewUserRepo(username);

    if(!newUser) {
        return null;
    }

    return newUser;
}

export const getAllUserUsecase = () => {

    const users = getAllUserRepo();

    if(!users) {
        return null;
    }

    return users;
}
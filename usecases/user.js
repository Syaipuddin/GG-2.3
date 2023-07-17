import { addNewUserRepo, getUserByIDRepo, getAllUserRepo } from "../repositories/user/user.js";

export const getUserByIDUsecase = (userId) => {

    const user = getUserByIDRepo(userId);

    if(!user) {
        return null;
    }

    return user;
}

export const addNewUserUsecase = (username) => {

    if(!username) {
        throw new Error("Username Tidak Valid!");
    }

    return addNewUserRepo(username);
}

export const getAllUserUsecase = () => {

    const users = getAllUserRepo();

    if(!users) {
        return null;
    }

    return users;
}
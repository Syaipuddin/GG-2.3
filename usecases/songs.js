import { addNewSongRepo, getSongsRepo } from "../repositories/songs/songs.js";

export const addNewSongUsecase = (title, artists, url) => {

    return addNewSongRepo(title, artists, url);

}

export const getSongsUsecase = () => {

    return getSongsRepo();

}
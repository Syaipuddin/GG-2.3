import { addNewSongRepo, getSongsRepo } from "../repositories/songs/songs.js";

export const addNewSongUsecase = (title, artists, url) => {

    if(!title || !artists || !url) {

        throw new Error('Body Tidak Lengkap!')
        
    }

    return addNewSongRepo(title, artists, url);

}

export const getSongsUsecase = () => {

    return getSongsRepo();

}
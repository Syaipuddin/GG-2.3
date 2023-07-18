import { getUsersPlaylistRepo, getPlaylistByIDRepo,  addNewSongToPlaylistRepo, addNewPlaylistRepo} from "../repositories/playlist/playlist.js";
import { getSongByIDRepo } from "../repositories/songs/songs.js";
import { getUserByIDRepo } from "../repositories/user/user.js";


export const getPlaylistByIDUsecase = (id) => {

    const playlist = getPlaylistByIDRepo(id);
    const songList = [];

    const songIds = playlist.list;
    songIds.map((e) => songList.push(getSongByIDRepo(e.songId)));
    
    // SORT THE SONGS
    const list = songList.sort((a, b) => b.played - a.played)

    if(!playlist) {
        return null;
    }

    return {...playlist, list};
}

export const addNewSongToPlaylistIDUsecase = (songid, playlistid) => {

    const song = getSongByIDRepo(songid);
    const playlist = getPlaylistByIDRepo(playlistid);


    return addNewSongToPlaylistRepo(song, playlist);
}

export const getUsersPlaylistUsecase = (userId) => {
    const user = getUserByIDRepo(userId);

    const playlists = getUsersPlaylistRepo(user?.playlists);

    playlists.map((e) => { 
        // COUNT THE LIST LENGTH FOR DELETEING PURPOSE
        const eLength = e.list.length;

        e.list.map((f) => { 
            
            e.list.push(getSongByIDRepo(f.songId));

                }

            );
        // DELETE THE RESIDUE BASED ON THE STORED LENGTH
        e.list.splice(0, eLength);

        }
    );


    if(!playlists) {
        return null;
    }

    return {...user, playlists};
}

export const addNewUserPlaylistUsecase = (user, pl) => {


    const validate = user.playlists.find((e) => e.id === Number(pl.playlistId));
    
    if(!validate ) {

        const newUserPl = {
            id : pl.playlistId
        }
    
        const result = user.playlists.push(newUserPl);

        if(!result) {    
            throw new Error('Gagal menambahkan Playlist');
        }
    
        return result;
    }

    throw new Error('Playlist telah ada')
}

export const addNewPlaylistUsecase = (name) => {

    if(!name) {

        throw new Error("Mohon masukkan Name yang sesuai");

    }

    return addNewPlaylistRepo(name);

}
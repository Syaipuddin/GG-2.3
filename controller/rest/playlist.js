import { getPlaylistByIDRepo } from '../../repositories/playlist/playlist.js';
import { getUserByIDRepo } from '../../repositories/user/user.js';
import { getUsersPlaylistUsecase, getPlaylistByIDUsecase, addNewSongToPlaylistIDUsecase, addNewUserPlaylistUsecase } from '../../usecases/playlist.js';


export const getPlayListById = (req, res)=>{
    const { playlistId } = req.params;

    const playlist = getPlaylistByIDUsecase(playlistId);

    if(!playlist){
        return res.status(404).json({message : "Playlist tidak ditemukan"});
    }

    res.status(200).json({
        playlist : playlist
    })
}

export const addNewSongToPlaylist = (req, res)=>{
    const { songId, playlistId } = req.params;

    const result = addNewSongToPlaylistIDUsecase(songId, playlistId);

    if(!result) {
        return res.status(500).json({ message : "Error adding song to playlist"});
    }

    res.status(201).json({message : result});
}

export const getUsersPlaylist = (req, res) => {
    const { userId } = req.params;

    const usersPlaylists = getUsersPlaylistUsecase(userId);

    if(!usersPlaylists) {
        return res.status(500).json({message : "Tidak ada Playlist!"})
    }

    res.status(200).json({usersPlaylists});
}

export const addNewUsersPlaylist = (req, res) => {
    const { userId, playlistId } = req.params;

    try {
        const user = getUserByIDRepo(userId);
        const playlist = getPlaylistByIDRepo(playlistId)
        const result = addNewUserPlaylistUsecase(user, playlist);
    
        res.status(201).json({message: "Berhasil menambahkan playlist ke user", playlistId : result});

    } catch (err) {

        res.status(500).json({error : err.message});

    }
}
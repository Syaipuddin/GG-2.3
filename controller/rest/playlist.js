import { getPlaylistByIDRepo } from '../../repositories/playlist/playlist.js';
import { getUserByIDRepo } from '../../repositories/user/user.js';
import { getUsersPlaylistUsecase, getPlaylistByIDUsecase, addNewSongToPlaylistIDUsecase, addNewUserPlaylistUsecase, addNewPlaylistUsecase } from '../../usecases/playlist.js';


export const getPlayListById = (req, res)=>{
    const { playlistId } = req.params;

    try {
        const playlist = getPlaylistByIDUsecase(playlistId);

        if(!playlist){
            return res.status(404).json({message : "Playlist tidak ditemukan"});
        }
    
        res.status(200).json({
            playlist : playlist
        })
    } catch (err) {

        res.status(500).json({error : err.message})
    }
}

export const addNewSongToPlaylist = (req, res)=>{
    const { songId, playlistId } = req.params;

    try {

        const result = addNewSongToPlaylistIDUsecase(songId, playlistId);

        if(!result) {
            return res.status(500).json({ message : "Error adding song to playlist"});
        }

        res.status(201).json({message : "Berhasil Menambahkan Lagu"});

    } catch (err) {

        res.status(500).json({error : err.message});

    }
}

export const getUsersPlaylist = (req, res) => {
    const { userId } = req.params;

    try {

        const usersPlaylists = getUsersPlaylistUsecase(userId);

        if(!usersPlaylists) {
            return res.status(500).json({message : "Tidak ada Playlist!"})
        }

        res.status(200).json({usersPlaylists});

    } catch (err) {
        res.status(500).json({error : err.message});
    }

    
}

export const addNewUsersPlaylist = (req, res) => {
    const { userId, playlistId } = req.params;

    try {
        const user = getUserByIDRepo(userId);
        const playlist = getPlaylistByIDRepo(playlistId)
        const result = addNewUserPlaylistUsecase(user, playlist);
    
        res.status(201).json({message: "Berhasil menambahkan playlist ke user"});

    } catch (err) {

        res.status(500).json({error : err.message});

    }

}

export const addNewPlaylist = (req, res) => {

    const { name } = req.body;

    try {

        const pl = addNewPlaylistUsecase(name);

        res.status(201).json({message : "Playlist berhasil dibuat", playlist : pl});
        
    } catch (err) {
        
        res.status(500).json({error : err.message});
     }

}
import playlists from './json/playlist.json' assert {type : "json"};

export const getPlaylistByIDRepo = (id) =>{

    const pl  = playlists.find( e => e.playlistId === Number(id));

    if(!pl) {
        throw new Error("Playlist Tidak ditemukan");
    }

    return pl;
}

export const addNewSongToPlaylistRepo = (song, playlist) => {

    const pl = playlists.find((e) => e.playlistId === Number(playlist.playlistId));
    const validate = pl.list.find((e) => e.songId === Number(song.songId));

    if(!validate) {
        const newSong = { "songId" : song.songId };
    
        playlist.list.push(newSong);
    
        return playlist;
    }

    throw new Error('Lagu telah ada!');
}

export const getUsersPlaylistRepo = (userpl) => {

    const newPlaylists = []

    userpl.map((e)=> newPlaylists.push(getPlaylistByIDRepo(e.id)));

    if(!newPlaylists) {
        throw new Error('Tidak ada Playlist di Dalam User!');
    }

    return newPlaylists;
}
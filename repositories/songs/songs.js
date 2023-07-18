import songs from './json/songs.json' assert {type : "json"};

export const getSongsRepo = () => {

    if(!songs) {
        throw new Error('Lagu Tidak ada');
    }

    const sortedSong = songs.sort((a, b) => b.played - a.played);

    return sortedSong;
}

export const addNewSongRepo = (title, artists, url) => {
    
        let newSong = {
            songId: songs.length + 1,
            title : title,
            artists : artists,
            url: url
        }
    
        songs.push(newSong);
    
        return newSong;
}

export const getSongByIDRepo = (id) => {
    
    const song = songs.find((e) => e.songId === Number(id));

    if(!song) {
        throw new Error('Lagu tidak ada');    
    }

    return song;
}
import songs from '../songs/json/songs.json' assert {type : "json"};

export const playSongByIDRepo = (id) => {

    const song = songs.find((e) => e.songId === Number(id));

    !song.played ? song.played = 1 : song.played += 1;

    if(!song) {
        throw new Error('Lagu tidak ditemukan!')
    }

    return song;
}
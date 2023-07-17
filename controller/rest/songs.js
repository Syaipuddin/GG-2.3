import { addNewSongUsecase, getSongsUsecase } from '../../usecases/songs.js';

export const addNewSong = (req, res) => {
    const { title, artists, url } = req.body;

    const newSong = addNewSongUsecase(title, artists, url);

    if(!newSong) {
        return res.status(500).json({message : "Gagal menambahkan Song"});
    }

    res.status(201).json({song : newSong});
}

export const getSongs = (req, res) => {

    const song = getSongsUsecase();

    if(song.length === 0) {
        return res.status(404).json({message : "Empty Song List"});
    }

    res.status(200).json({result: song});
}
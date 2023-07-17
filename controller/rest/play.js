import { playSongByIDUsecase } from '../../usecases/play.js';

export const playSong = (req, res) => {
    try {

        const { songId } = req.params;

        const song = playSongByIDUsecase(songId);
    
        res.status(200).json({nowPlaying: song})

    } catch (err) {
        res.status(500).json({error : err.message});
    }
}
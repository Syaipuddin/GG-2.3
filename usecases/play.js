import { playSongByIDRepo } from '../repositories/play/play.js';

export const playSongByIDUsecase = (songId) => {

    const song = playSongByIDRepo(songId);

    return song;

}
import express from 'express';
import { getPlayListById, getUsersPlaylist, addNewSongToPlaylist, addNewUsersPlaylist } from '../controller/rest/playlist.js';
import { getSongs, addNewSong } from '../controller/rest/songs.js';
import { playSong  } from '../controller/rest/play.js';
import { getUser, addNewUser , getAllUser} from '../controller/rest/user.js';


const router = express.Router();

// PLAYLIST
router.get('/user/playlist/:userId', getUsersPlaylist);
router.get('/playlist/:playlistId', getPlayListById);

router.post('/playlist/:songId/:playlistId', addNewSongToPlaylist);
router.post('/user/:userId/playlist/:playlistId', addNewUsersPlaylist);

// SONG
router.get('/songs', getSongs);
router.get('/play/:songId', playSong);

router.post('/songs', addNewSong);

// USER 
router.get('/users', getAllUser)
router.get('/user/:userId', getUser);


router.post('/user', addNewUser)

export default router;
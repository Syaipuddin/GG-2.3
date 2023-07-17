import express from 'express';
import { getPlayListById, getUsersPlaylist, addNewSongToPlaylist, addNewUsersPlaylist, addNewPlaylist } from '../controller/rest/playlist.js';
import { getSongs, addNewSong } from '../controller/rest/songs.js';
import { playSong  } from '../controller/rest/play.js';
import { getUser, addNewUser , getAllUser} from '../controller/rest/user.js';


const router = express.Router();

// PLAYLIST
router.get('/user/playlist/:userId', getUsersPlaylist);
router.get('/playlist/:playlistId', getPlayListById);

router.post('/playlist/:playlistId/:songId', addNewSongToPlaylist);
router.post('/user/:userId/playlist/:playlistId', addNewUsersPlaylist);
router.post('/playlist', addNewPlaylist);

// SONG
router.get('/songs', getSongs);
router.get('/play/:songId', playSong);

router.post('/songs', addNewSong);

// USER 
router.get('/users', getAllUser)
router.get('/user/:userId', getUser);


router.post('/user', addNewUser)

export default router;
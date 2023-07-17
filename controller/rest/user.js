import { addNewUserUsecase, getUserByIDUsecase, getAllUserUsecase } from '../../usecases/user.js';

export const getUser = (req, res) => {
    const { userId } = req.params;

    try {
        const user = getUserByIDUsecase(userId);

        if(!user) {
            return res.status(404).json({message: "User Tidak ditemukan!"});    
        };

        res.status(200).json({user : user});

    } catch(err) {

        res.status(500).json({error : err.message});
    }
    
}

export const addNewUser = (req, res) => {
    const { username } = req.body;

    try {
        const newUser = addNewUserUsecase(username);

        if(!newUser) {
            return res.status(500).send({message : "Gagal membuat User!"});
        }

        res.status(201).send({user : newUser});
        
    } catch(err) {

        res.status(500).json({error : err.message});
    }
}

export const getAllUser = (req, res) => {

    const users = getAllUserUsecase();

    try {
        if(!users) {
            return res.status(404).json({message : "Data tidak ditemukan"});
        }
    
        res.status(200).json({
            data: users
        })
    } catch(err) {

        res.status(500).json({error : err.message});
    }
}
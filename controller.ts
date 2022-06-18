import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import userInformation from './schema/userInformation';
import { Guid } from 'guid-typescript';
import bcrypt from 'bcrypt';
dotenv.config();

// Initiating server
const myApp = express();

interface user {
    name: string;
    mail: string;
    password: string;
}

const configMongo = async () => {
    await mongoose.connect(
        process.env.MONGO_URI || '',
        {
            keepAlive: true,
        }
    )
}

myApp.post('/create/user', bodyParser.json(), async (req, res) => {
    const user: user = req.body;

    // Check if user already exists
    const mailExists = await userInformation.find({
        mail: req.body.mail
    })
    if(mailExists.length > 0) {
        res.send('Mail already exists');
    }else{

        // Hash password
        const hashedPassword = await bcrypt.hash(user.password, 10);

        await new userInformation({
            name: user.name,
            mail: user.mail,
            password: hashedPassword
        }).save();

        res.send('User created');
        console.log('User created')
    }
});

myApp.post('/user', bodyParser.json(), async (req, res) => {
    const user: user = req.body;

    console.log(user)
    // Check if user doesnt exists
    const userDB = await userInformation.find({
        mail: req.body.mail
    })

    if(userDB.length > 0) {

        // Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(user.password, userDB[0].password);
        if(isPasswordCorrect) {
            res.send(userDB[0]);
            console.log("DONE")
        }else{
            res.send('Password is incorrect');
            console.log("PASSWORD INCORRECT")
        }
    }else{
        res.send("User doesn't exists");
        console.log("USER DOESNT EXISTS")
    }
});

const port = process.env.PORT || 3000;

myApp.listen(port, () => console.log(new Date().toLocaleString() + " App listening on port " + port));
configMongo();
const mongoose = require("mongoose");
const express = require("express");
const UserModel = require("../model/auth/user");
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require("../helpers/config")

router.post('/signup', async (req, res, next) => {
    try {
        console.log("Request entry", req.body);
        const {
            fName,
            lName,
            phoneNo,
            email,
            password
        } = req.body;
        let userdata = await UserModel.find({
            phoneNo
        }).exec();
        console.log("userdata", userdata);
        if (userdata.length > 0) {
            return res.status(409).json({ // resource conflict error
                message: 'User is already registered'
            });
        } else {
            const id = "usrId_" + phoneNo;
            const user = new UserModel({
                uid: id,
                fName: fName,
                lName: lName,
                phoneNo: phoneNo,
                email: email,
                password: password,
                address: "",
                city: "Solapur",
                state: "Maharashtra"
            });

            console.log("user", user);
            await user.save();
            return res.status(200).json({
                msg: "User created successfully!"
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "Failed to signup" + e
        });
    };
});


router.post('/login', async (req, res, next) => {
    try {
        const {
            phoneNo,
            password
        } = req.body;
        let userdata = await UserModel.find({
            phoneNo
        }).exec();
        console.log("userdata", userdata);
        if (userdata.length > 0) {
            let logindata = await UserModel.find({
                phoneNo,
                password
            }).exec();
            console.log("logindata", logindata);
            if (logindata.length > 0) {
                const token = jwt.sign({
                    phoneNo: phoneNo,
                    password: password
                }, config.PRIVATE_KEY, {
                    expiresIn: "3h"
                }, );
                return res.status(200).json({
                    token: token,
                    message: 'Successfully logged in.'
                });
            }
            else{
                return res.status(409).json({ 
                    message: 'Wrong password'
                });
            }
        } else {
            return res.status(404).json({ 
                message: 'User does not exist'
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "Failed to signup" + e
        });
    };
});

module.exports = router;
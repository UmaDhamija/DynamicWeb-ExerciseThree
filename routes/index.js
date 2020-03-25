const express = require('express');


const router = express.Router();

router.get("/", (req, res) => res.send('Cool Call Back at Root'));

module.exports = router;



//LIKE A typical React:
// import React from 'react'
//
// function whatever(){
//
//
// }
//
// export whatever

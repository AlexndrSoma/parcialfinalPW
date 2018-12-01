const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req,res) => {
  /*  const tasks = await Task.find(); */
    res.render ('index');

});
 /*
router.post('/', async (req,res) => {
    const tasks = await Task.find();
    res.render ('index', {tasks});

});

*/



module.exports=router;
const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req,res) => {
   const tasks = await Task.find(); 
    res.render ('index', { tasks });

});


 
router.post('/api/Celulares/', async (req,res) => {
    const tasks =  new Task(req.body);
    await tasks.save();
    res.redirect('/');

});

router.get('/edit/:id', async (req,res) => {
    const task = await Task.findById(req.params.id);
    res.render('edit', { Task });
  });
  
  
  router.post('/edit/:id', async (req,res) => {
    const { id } = req.params;
    await Task.update({_id:id}. req.body);
     res.redirect('/');
  });


router.get('/api/Celulares/:id', async (req,res) => {
    let { id } = req.params;
    await Task.remove({_id:id});
    res.redirect('/');
});





module.exports=router;
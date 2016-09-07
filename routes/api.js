const express = require ('express');
const router = express.Router();


//midlleware to validate the rout inputs
router.post('/:math', (req,res,next)  =>  {
  if(!req.body.num1 && !req.body.num2)  {
    res.status(432).json({message: 'No data fool'});
  }
  next();
})
//routes for the calculator
router.post('/add', (req, res, next) =>  {
  res.json({result:req.body.num1 + req.body.num2});
  next();
})

router.post('/subtract', (req, res, next) =>  {
  res.json({result:req.body.num1 - req.body.num2});
})

router.post('/divide', (req, res, next) =>  {
  res.json({result:req.body.num1 / req.body.num2});
})


module.exports = router;

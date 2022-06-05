const {Router} = require('express');
const {getDiets} = require('../Controllers/diets'); 
const router = Router();

router.get('/', getDiets )

module.exports= router;
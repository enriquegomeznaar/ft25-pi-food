const { Router } = require('express');
const {
    getRecipes,
    getRecipeByName,
    getRecipeById,
    postRecipe
} = require('../Controllers/recipes')
const router = Router();

router.get('/', getRecipes);
router.get('/search', getRecipeByName);
router.get('/:id', getRecipeById);
router.post('/addRecipe', postRecipe);


module.exports = router;
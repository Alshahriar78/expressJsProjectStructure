const express = require('express');
const router= express.Router();


const blogController=require('../Controllers/blogController');
const blogDetailsController=require('../Controllers/blogDetailsController');
const CommentController=require('../Controllers/commentController');
const messageController=require('../Controllers/messageController');
const portfolioController=require('../Controllers/portfolioController');
const productController=require('../Controllers/productController');
const profitController=require('../Controllers/profitController');
const projectController=require('../Controllers/projectController');
const serviceController=require('../Controllers/serviceController');
const titleController=require('../Controllers/titleController');


router.get('/one',blogController.create);
router.get('/two',blogController.read);
router.get('/three',blogController.delete);
router.get('/four',blogController.update);


router.get('/five',blogDetailsController.create);
router.get('/six',blogDetailsController.read);
router.get('/seven',blogDetailsController.delete);
router.get('/eight',blogDetailsController.update);


router.get('/nine',CommentController.create);
router.get('/ten',CommentController.read);
router.get('/eleven',CommentController.delete);
router.get('/twelve',CommentController.update);


router.get('/thirteen',messageController.create);
router.get('/fourteen',messageController.read);
router.get('/fifteen',messageController.delete);
router.get('/sixteen',messageController.update);


router.get('/seventeen',portfolioController.create);
router.get('/eighteen',portfolioController.read);
router.get('/nineteen',portfolioController.delete);
router.get('/twenty',portfolioController.update);


router.get('/twenty-one',productController.create);
router.get('/twenty-two',productController.read);
router.get('/twenty-three',productController.delete);
router.get('/twenty-four',productController.update);


router.get('/twenty-five',profitController.create);
router.get('/twenty-six',profitController.read);
router.get('/twenty-seven',profitController.delete);
router.get('/twenty-eight',profitController.update);


router.get('/twenty-nine',projectController.create);
router.get('/thirty',projectController.read);
router.get('/thirty-one',projectController.delete);
router.get('/twenty-two',projectController.update);


router.get('/thirty-three',serviceController.create);
router.get('/thirty-four',serviceController.read);
router.get('/thirty-five',serviceController.delete);
router.get('/twenty-six',serviceController.update);


router.get('/thirty-seven',titleController.create);
router.get('/thirty-eight',titleController.read);
router.get('/thirty-nine',titleController.delete);
router.get('/forty',titleController.update);



module.exports=router;

const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/product.controller')
const ThumbController = require('../controllers/thumbnail.controller')
const CommentController = require('../controllers/comment.controller')

// Thumbnail
router.get('/thumbnail', ThumbController.getAllThumbnail)
router.get('/thumbnail/:id_thumb', ThumbController.detailThumbnail)

// Product
router.get('/product', ProductController.getAllProduct)
router.get('/product/:id_product', ProductController.detailProduct)

// Comment
router.get('/comment', CommentController.getAllComment)

module.exports = router
const express = require('express')
const router = express.Router()
const AuthMiddleware = require('../middleware/auth.middleware')
const ProductController = require('../controllers/product.controller')
const ThumbController = require('../controllers/thumbnail.controller')
const CommentController = require('../controllers/comment.controller')

router.use(AuthMiddleware)

// Thumbnail
router.post('/thumbnail', ThumbController.createThumbnail)
router.put('/thumbnail/:id_thumb', ThumbController.editThumbnail)
router.delete('/thumbnail/:id_thumb', ThumbController.deleteThumbnail)

// Product
router.post('/product/:id_thumb', ProductController.createProduct)
router.put('/product/:id_product', ProductController.editProduct)
router.delete('/product/:id_product', ProductController.deleteProduct)

// Comment
router.post('/comment/:id_comment', CommentController.createComment)
router.delete('/comment/:id_comment', CommentController.deleteComment)

module.exports = router

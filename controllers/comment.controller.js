const CommentModel = require('../models/comment.model')

const getAllComment = async (req, res) => {
  try {
    const result = await CommentModel.find()
    if (!result.length) {
      return res
        .status(404)
        .json({ message: 'Tidak Terdapat Data!', data: result })
    }
    res
      .status(201)
      .json({ message: 'Berhasil Mendapatkan Data!', data: result })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

const createComment = async (req, res) => {
  const { comment } = req.body
  const id = req.params.id_comment

  const commentData = new CommentModel({
    id_thumbnail: id,
    username: req.user.username,
    comment,
    time_stamp: Date.now(),
  })

  try {
    const result = await commentData.save()
    res
      .status(201)
      .json({ message: 'Berhasil Menambahkan Comment!', data: result })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

const deleteComment = async (req, res) => {
  const id = req.params.id_comment

  try {
    const result = await CommentModel.findById(id)
    if (!result) {
      return res
        .status(404)
        .json({ message: `Data tidak ditemukan dengan ID ${id}` })
    }
    const deletedData = await CommentModel.findByIdAndDelete(id)
    res.status(201).json({
      message: `Berhasil menghapus Data dengan ID ${id}`,
      deletedData,
    })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

module.exports = {
  getAllComment,
  createComment,
  deleteComment,
}

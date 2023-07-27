const ThumbnailModel = require('../models/thumbnail.model')

const getAllThumbnail = async (_, res) => {
  try {
    const result = await ThumbnailModel.find()
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

const detailThumbnail = async (req, res) => {
  const id = req.params.id_thumb

  try {
    const result = await ThumbnailModel.findById(id)
    if (!result) {
      return res
        .status(404)
        .json({ message: `Data tidak ditemukan dengan ID ${id}` })
    }
    res
      .status(201)
      .json({ message: 'Berhasil Mendapatkan Detail Data!', data: result })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

const createThumbnail = async (req, res) => {
  const { title, url_img, url_video } = req.body
  const thumbnail = new ThumbnailModel({
    title,
    url_img,
    url_video,
  })

  try {
    const result = await thumbnail.save()
    res
      .status(201)
      .json({ message: 'Berhasil Menambahkan Thumbnail!', data: result })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

const editThumbnail = async (req, res) => {
  const { url_img, url_video, title } = req.body
  const id = req.params.id_thumb

  const thumbnail = {
    title,
    url_img,
    url_video,
  }

  const option = { new: true }

  try {
    const resultId = await ThumbnailModel.findById(id)
    if (!resultId) {
      return res
        .status(404)
        .json({ message: `Data tidak ditemukan dengan ID ${id}` })
    }

    const result = await ThumbnailModel.findByIdAndUpdate(id, thumbnail, option)
    res.status(201).json({ message: 'Berhasil Merubah Data!', data: result })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

const deleteThumbnail = async (req, res) => {
  const id = req.params.id_thumb

  try {
    const result = await ThumbnailModel.findById(id)
    if (!result) {
      return res
        .status(404)
        .json({ message: `Data tidak ditemukan dengan ID ${id}` })
    }

    const deletedData = await ThumbnailModel.findByIdAndDelete(id)
    res
      .status(201)
      .json({ message: `Berhasil menghapus Data dengan ID ${id}`, deletedData })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

module.exports = {
  getAllThumbnail,
  detailThumbnail,
  createThumbnail,
  editThumbnail,
  deleteThumbnail,
}

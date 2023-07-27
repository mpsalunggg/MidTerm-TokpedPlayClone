const ProductModel = require('../models/product.model')

const getAllProduct = async (_, res) => {
  try {
    const result = await ProductModel.find()
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

const detailProduct = async (req, res) => {
  const id = req.params.id_product

  try {
    const result = await ProductModel.findById(id)
    if (!result) {
      return res
        .status(404)
        .json({ message: `Data tidak ditemukan dengan ID ${id}` })
    }
    res
      .status(201)
      .json({ message: 'Berhasil Mendapatkan Data!', data: result })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

const createProduct = async (req, res) => {
  const { title, link_product, price, desc_product } = req.body
  const id = req.params.id_thumb

  const product = new ProductModel({
    id_thumbnail: id,
    title,
    link_product,
    price,
    desc_product,
  })
  try {
    const result = await product.save()
    res
      .status(201)
      .json({ message: 'Berhasil Menambahkan Product!', data: result })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

const editProduct = async (req, res) => {
  const { title, link_product, price, desc_product } = req.body
  const id = req.params.id_product

  const product = {
    title,
    link_product,
    price,
    desc_product,
  }

  const option = { new: true }

  try {
    const resultId = await ProductModel.findById(id)
    if (!resultId) {
      return res
        .status(404)
        .json({ message: `Data tidak ditemukan dengan ID ${id}` })
    }
    const result = await ProductModel.findByIdAndUpdate(id, product, option)
    res.status(201).json({ message: 'Berhasil Merubah Data!', data: result })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

const deleteProduct = async (req, res) => {
  const id = req.params.id_product

  try {
    const result = await ProductModel.findById(id)
    if (!result) {
      return res
        .status(404)
        .json({ message: `Data tidak ditemukan dengan ID ${id}` })
    }
    const deletedData = await ProductModel.findByIdAndDelete(id)
    res
      .status(200)
      .json({ message: `Berhasil menghapus Data dengan ID ${id}`, deletedData })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

module.exports = {
  getAllProduct,
  detailProduct,
  createProduct,
  editProduct,
  deleteProduct,
}

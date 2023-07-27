const bcrypt = require('bcrypt')
const AuthModel = require('../models/auth.model')
const AuthService = require('../services/auth_service')

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body

    const hashPass = await bcrypt.hash(password, 10)
    const data = {
      username,
      password: hashPass,
    }
    const existingUser = await AuthModel.findOne({ username })
    if (existingUser) {
      return res.status(409).json({ message: 'Username sudah ada, Masukkan username yang berbeda!' })
    }
    const user = new AuthModel(data)
    const result = await user.save()
    res.status(200).json({
      message: 'User Berhasil Terdaftar!',
      result,
    })
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await AuthModel.findOne({ username })
    const matchingPass = await bcrypt.compare(password, user.password)

    const data = {
        user_id: user._id,
        username: user.username
    }

    if (!user) {
      return res.status(401).json({ message: 'Kesalahan Username!' })
    }
    if (!matchingPass) {
      return res.status(401).json({ message: 'Kesalahan Password!' })
    }

    const tokenUser = AuthService.generateToken(data)

    res.status(200).json({message: 'Login Berhasil Yeyy!', username: data.username, tokenUser})
  } catch (err) {
    res.status(500).json({ message: 'Terjadi Kesalahan Server!' })
  }
}

module.exports = {
  registerUser,
  loginUser
}

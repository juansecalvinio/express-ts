import express from 'express' // esmodules
// const express = require('express'); => commonjs

import diaryRouter from './routes/diaries.routes'

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping', (_req, res) => { // El guion bajo en _req sirve para que TS ignore la variable sin uso
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

import express from 'express'
import os from 'os'
import fs from 'fs/promises'

const app = express()
const PORT = 4000

app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

app.get('/', (req, res) => {
  res.send('API server is running')
})

app.get('/totalmem', (req, res) => {
  res.json({ total: os.totalmem() })
})

app.get('/freemem', (req, res) => {
  res.json({ free: os.freemem() })
})

app.post('/createfile', async (req, res) => {
  const { filename, content } = req.body || {}
  if (!filename) return res.status(400).json({ error: 'filename required' })
  try {
    await fs.writeFile(filename, content || '')
    res.json({ ok: true, action: 'created', filename })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('/appendfile', async (req, res) => {
  const { filename, content } = req.body || {}
  if (!filename) return res.status(400).json({ error: 'filename required' })
  try {
    await fs.appendFile(filename, content || '')
    res.json({ ok: true, action: 'appended', filename })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})

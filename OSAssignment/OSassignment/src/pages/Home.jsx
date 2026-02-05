import { useState } from 'react'
import './Home.css'

const API = 'http://localhost:4000'

export default function Home() {
  const [result, setResult] = useState('')

  async function totalMem() {
    const res = await fetch(`${API}/totalmem`)
    const j = await res.json()
    setResult(`Total memory: ${j.total}`)
  }

  async function freeMem() {
    const res = await fetch(`${API}/freemem`)
    const j = await res.json()
    setResult(`Free memory: ${j.free}`)
  }

  async function createFile() {
    const filename = window.prompt('Create filename', 'sample.txt')
    if (!filename) return
    const content = window.prompt('File content', `Created at ${new Date().toISOString()}`)
    const res = await fetch(`${API}/createfile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, content })
    })
    const j = await res.json()
    setResult(j.ok ? `Created ${j.filename}` : `Error: ${j.error}`)
  }

  async function copyFile() {
    const filename = window.prompt('Append filename', 'sample.txt')
    if (!filename) return
    const content = window.prompt('Append content', `Appended at ${new Date().toISOString()}\n`)
    const res = await fetch(`${API}/appendfile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, content })
    })
    const j = await res.json()
    setResult(j.ok ? `Appended to ${j.filename}` : `Error: ${j.error}`)
  }

  return (
    <main className="home-container">
      <section className="home-titles">
        <div className="home-title">Node JS DS Model</div>
        <div className="home-title">Node JS FS Model</div>
      </section>

      <section className="button-area">
        <div className="button-grid">
          <button className="model-btn" onClick={totalMem}>TotalMemory</button>
          <button className="model-btn" onClick={freeMem}>FreeMemory</button>
          <button className="model-btn" onClick={createFile}>CreateFile</button>
          <button className="model-btn" onClick={copyFile}>CopyFile</button>
        </div>
      </section>
      <section className="result-area">
        {result && <div className="result-box">{result}</div>}
      </section>
    </main>
  )
}


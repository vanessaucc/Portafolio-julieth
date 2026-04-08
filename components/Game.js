'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './Game.module.css'

const CODE_SNIPPETS = [
  "const developer = { name: 'Vanessa', skills: ['React', 'Django'] };",
  "function helloWorld() { return 'Hello from Next.js!'; }",
  "import React, { useState } from 'react';",
  "git commit -m 'feat: add new feature to portfolio'",
  "SELECT * FROM projects WHERE developer = 'Vanessa';",
  "pip install django && python manage.py runserver",
  "const [state, setState] = useState(null);",
  "export default function Portfolio() { return <main />; }",
]

export default function Game() {
  const [snippet, setSnippet] = useState('')
  const [typed, setTyped] = useState('')
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [time, setTime] = useState(0)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [bestWpm, setBestWpm] = useState(0)
  const inputRef = useRef(null)
  const timerRef = useRef(null)
  const startTimeRef = useRef(null)

  const newSnippet = useCallback(() => {
    const s = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]
    setSnippet(s)
    setTyped('')
    setStarted(false)
    setFinished(false)
    setTime(0)
    setWpm(0)
    setAccuracy(100)
    clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    newSnippet()
  }, [newSnippet])

  const handleInput = (e) => {
    const val = e.target.value
    if (!started && val.length === 1) {
      setStarted(true)
      startTimeRef.current = Date.now()
      timerRef.current = setInterval(() => {
        setTime(Math.floor((Date.now() - startTimeRef.current) / 1000))
      }, 500)
    }
    setTyped(val)

    // Accuracy
    let correct = 0
    for (let i = 0; i < val.length; i++) {
      if (val[i] === snippet[i]) correct++
    }
    setAccuracy(val.length > 0 ? Math.round((correct / val.length) * 100) : 100)

    if (val === snippet) {
      clearInterval(timerRef.current)
      const elapsed = (Date.now() - startTimeRef.current) / 1000 / 60
      const words = snippet.split(' ').length
      const finalWpm = Math.round(words / elapsed)
      setWpm(finalWpm)
      setBestWpm(prev => Math.max(prev, finalWpm))
      setFinished(true)
    }
  }

  const getCharClass = (i) => {
    if (i >= typed.length) return styles.charPending
    if (typed[i] === snippet[i]) return styles.charCorrect
    return styles.charWrong
  }

  return (
    <section id="game" className={styles.gameSection}>
      <span className="section-tag">Bonus interactivo</span>
      <h2 className="section-title">🎮 Typing <span>Challenge</span></h2>
      <p className={styles.subtitle}>
        ¿Qué tan rápido puedes escribir código? Pon a prueba tu velocidad de desarrolladora
      </p>

      <div className={styles.box}>
        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statVal}>{wpm || '—'}</span>
            <span className={styles.statLabel}>WPM</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statVal}>{accuracy}%</span>
            <span className={styles.statLabel}>Precisión</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statVal}>{time}s</span>
            <span className={styles.statLabel}>Tiempo</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statVal} style={{ color: 'var(--purple-400)' }}>{bestWpm || '—'}</span>
            <span className={styles.statLabel}>Mejor WPM</span>
          </div>
        </div>

        {/* Code display */}
        <div className={styles.codeDisplay} onClick={() => inputRef.current?.focus()}>
          <div className={styles.codeHeader}>
            <span className={styles.dot2} style={{ background: '#ff5f57' }}></span>
            <span className={styles.dot2} style={{ background: '#febc2e' }}></span>
            <span className={styles.dot2} style={{ background: '#28c840' }}></span>
            <span className={styles.filename}>snippet.js</span>
          </div>
          <div className={styles.code}>
            {snippet.split('').map((char, i) => (
              <span key={i} className={getCharClass(i)}>
                {char}
              </span>
            ))}
            {!started && <span className={styles.cursor}>|</span>}
          </div>
        </div>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${snippet ? (typed.length / snippet.length) * 100 : 0}%` }}
          ></div>
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          className={styles.input}
          value={typed}
          onChange={handleInput}
          disabled={finished}
          placeholder="Haz clic aquí y empieza a escribir el código..."
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />

        {/* Result */}
        {finished && (
          <div className={styles.result}>
            <div className={styles.resultEmoji}>🎉</div>
            <h3>¡Excelente! Completaste el snippet</h3>
            <p>
              <strong>{wpm} WPM</strong> con <strong>{accuracy}% de precisión</strong> en {time} segundos
            </p>
            <div className={styles.rating}>
              {wpm < 30 && '🐢 Sigue practicando'}
              {wpm >= 30 && wpm < 50 && '⚡ ¡Buen ritmo!'}
              {wpm >= 50 && wpm < 70 && '🚀 ¡Velocidad dev!'}
              {wpm >= 70 && '🔥 ¡Eres una máquina!'}
            </div>
          </div>
        )}

        <button className={`btn btn--primary ${styles.newBtn}`} onClick={newSnippet}>
          <i className="fas fa-shuffle"></i> Nuevo snippet
        </button>
      </div>
    </section>
  )
}

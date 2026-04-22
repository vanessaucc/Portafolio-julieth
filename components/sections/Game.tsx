'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'
import { CODE_SNIPPETS } from '@/data/gameSnippets'
import { useLang } from '@/context/LangContext'

export default function Game() {
  const [snippet, setSnippet]   = useState('')
  const [typed, setTyped]       = useState('')
  const [started, setStarted]   = useState(false)
  const [finished, setFinished] = useState(false)
  const [time, setTime]         = useState(0)
  const [wpm, setWpm]           = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [bestWpm, setBestWpm]   = useState(0)
  const inputRef     = useRef<HTMLInputElement>(null)
  const timerRef     = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(0)
  const { t } = useLang()
  const g = t.game

  const newSnippet = useCallback(() => {
    setSnippet(CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)])
    setTyped(''); setStarted(false); setFinished(false); setTime(0); setWpm(0); setAccuracy(100)
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  useEffect(() => { newSnippet() }, [newSnippet])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (!started && val.length === 1) {
      setStarted(true); startTimeRef.current = Date.now()
      timerRef.current = setInterval(() => setTime(Math.floor((Date.now() - startTimeRef.current) / 1000)), 500)
    }
    setTyped(val)
    let correct = 0
    for (let i = 0; i < val.length; i++) if (val[i] === snippet[i]) correct++
    setAccuracy(val.length > 0 ? Math.round((correct / val.length) * 100) : 100)
    if (val === snippet) {
      if (timerRef.current) clearInterval(timerRef.current)
      const elapsed = (Date.now() - startTimeRef.current) / 1000 / 60
      const finalWpm = Math.round(snippet.split(' ').length / elapsed)
      setWpm(finalWpm); setBestWpm(prev => Math.max(prev, finalWpm)); setFinished(true)
    }
  }

  const getCharClass = (i: number) => {
    if (i >= typed.length) return 'char-pending'
    return typed[i] === snippet[i] ? 'char-correct' : 'char-wrong'
  }

  const rating = g.ratings.find(r => wpm < r.max)?.text ?? g.ratings[g.ratings.length - 1].text

  const stats = [
    { val: wpm || '—', label: 'WPM' },
    { val: `${accuracy}%`, label: g.accuracy },
    { val: `${time}s`, label: g.time },
    { val: bestWpm || '—', label: g.bestWpm },
  ]

  return (
    <section id="game" className="py-20 px-6 sm:px-10 lg:px-16 min-h-screen flex flex-col items-center justify-center relative bg-[linear-gradient(135deg,#d8b4fe_0%,#c084fc_25%,#a78bca_50%,#93c5fd_75%,#bfdbfe_100%)] dark:bg-[linear-gradient(135deg,#2d1b4e_0%,#3d2a5c_25%,#2a2240_50%,#1e2a4a_75%,#1a2540_100%)] overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.15)_0%,transparent_65%)] dark:bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_65%)] pointer-events-none animate-float-slow" />

      <div className="section-inner flex flex-col items-center">
        <AnimateIn className="text-center w-full">
          <SectionHeader tag={g.tag} dark accent>
            <i className="fas fa-keyboard text-purple-500 text-[0.75em] mr-2" />{g.title} <span>{g.titleSpan}</span>
          </SectionHeader>
        </AnimateIn>

        <AnimateIn delay={100} className="w-full max-w-[860px]">
          <div className="bg-white/[0.06] dark:bg-white/[0.04] border border-purple-300/30 dark:border-blue-400/30 rounded-2xl p-6 sm:p-8 w-full backdrop-blur-sm shadow-lg shadow-purple-400/10 dark:shadow-blue-900/20">

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 mb-6 max-[500px]:grid-cols-2">
              {stats.map(s => (
                <div key={s.label} className="flex flex-col items-center gap-1 p-4 bg-gradient-to-br from-white/[0.08] to-blue-100/[0.06] dark:from-white/[0.03] dark:to-blue-400/[0.05] rounded-xl border border-purple-300/25 dark:border-blue-400/25 shadow-sm shadow-purple-400/5 dark:shadow-blue-900/10">
                  <span className="font-display font-extrabold text-[1.5rem] text-purple-900 dark:text-blue-200 leading-none">{s.val}</span>
                  <span className="text-[0.68rem] uppercase tracking-[0.1em] text-purple-800 dark:text-blue-300 mt-1">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Terminal window */}
            <div
              className="bg-[#080112] dark:bg-[#0f0a1a] rounded-xl border border-purple-400/40 dark:border-blue-400/35 overflow-hidden mb-4 cursor-text shadow-[0_0_30px_rgba(168,85,247,0.15)] dark:shadow-[0_0_30px_rgba(59,130,246,0.12)]"
              onClick={() => inputRef.current?.focus()}
            >
              {/* Title bar */}
              <div className="bg-white/[0.06] dark:bg-white/[0.04] px-4 py-2.5 flex items-center gap-2 border-b border-purple-400/25 dark:border-blue-400/20">
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <span key={c} className="w-3 h-3 rounded-full inline-block" style={{ background: c }} />
                ))}
                <span className="ml-2 text-[0.72rem] text-gray-800 font-mono tracking-wide">snippet.js</span>
                <span className="ml-auto text-[0.68rem] text-gray-700 font-mono">{typed.length}/{snippet.length}</span>
              </div>
              {/* Code area */}
              <div className="p-5 sm:p-6 font-mono text-[0.9rem] sm:text-base leading-[1.9] tracking-[0.02em] break-all min-h-[90px]">
                {snippet.split('').map((char, i) => (
                  <span key={i} className={getCharClass(i)}>{char}</span>
                ))}
                {!started && <span className="text-brand-400 animate-blink font-thin">|</span>}
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 bg-white/10 dark:bg-white/5 rounded-full mb-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-400 to-blue-300 dark:from-blue-400 dark:to-cyan-400 rounded-full transition-[width] duration-100"
                style={{ width: `${snippet ? (typed.length / snippet.length) * 100 : 0}%` }}
              />
            </div>

            {/* Input */}
            <input
              ref={inputRef}
              value={typed}
              onChange={handleInput}
              disabled={finished}
              placeholder={g.placeholder}
              className="w-full px-4 py-3.5 bg-white/[0.08] dark:bg-white/[0.06] border border-purple-300/40 dark:border-blue-400/35 rounded-xl text-gray-900 dark:text-blue-100 text-[0.88rem] font-mono outline-none transition-all placeholder:text-gray-700 dark:placeholder:text-blue-300 focus:border-purple-400/60 dark:focus:border-blue-400/60 focus:bg-white/[0.12] dark:focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(168,85,247,0.12)] dark:focus:shadow-[0_0_0_3px_rgba(59,130,246,0.12)] mb-4 disabled:opacity-50"
              spellCheck={false} autoComplete="off" autoCorrect="off" autoCapitalize="off"
            />

            {/* Finished banner */}
            {finished && (
              <div className="bg-purple-300/10 dark:bg-blue-400/10 border border-purple-400/30 dark:border-blue-400/30 rounded-xl p-6 text-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-400/20 dark:bg-blue-400/20 flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-trophy text-purple-500 dark:text-blue-400 text-xl" />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{g.finished}</h3>
                <p
                  className="text-accent-400 text-[0.9rem] mb-2"
                  dangerouslySetInnerHTML={{
                    __html: g.finishedSub(wpm, accuracy, time).replace(
                      /(\d+\s?WPM|\d+%|\d+s)/g,
                      '<strong class="text-accent-500">$1</strong>'
                    ),
                  }}
                />
                <div className="text-[1rem] font-semibold text-accent-400 mt-2">{rating}</div>
              </div>
            )}

            <button className="btn btn--primary mt-1" onClick={newSnippet}>
              <i className="fas fa-shuffle" /> {g.newSnippet}
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

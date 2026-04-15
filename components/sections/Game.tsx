'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
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
    <section id="game" className="py-20 pr-16 pl-12 min-h-screen flex flex-col justify-center relative bg-[linear-gradient(135deg,#22182c_0%,#2e1a47_100%)] max-[900px]:py-16 max-[900px]:px-6">
      <SectionHeader tag={g.tag} dark>🎮 {g.title} <span>{g.titleSpan}</span></SectionHeader>
      <p className="text-brand-300/80 mb-10 text-[0.95rem] leading-[1.6] max-w-[500px]">{g.description}</p>

      <div className="bg-white/[0.04] border border-brand-400/20 rounded-card p-8 max-w-[700px]">
        <div className="flex gap-6 mb-6">
          {stats.map(s => (
            <div key={s.label} className="flex flex-col items-center gap-1 flex-1 p-4 bg-white/[0.05] rounded-lg border border-brand-400/15">
              <span className="font-display font-extrabold text-[1.6rem] text-brand-300">{s.val}</span>
              <span className="text-[0.7rem] uppercase tracking-[0.1em] text-white/40">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#0d0117] rounded-lg border border-[rgba(132,25,239,0.2)] overflow-hidden mb-4 cursor-text" onClick={() => inputRef.current?.focus()}>
          <div className="bg-white/[0.05] px-4 py-2 flex items-center gap-1.5 border-b border-white/[0.05]">
            {['#ff5f57','#febc2e','#28c840'].map(c => <span key={c} className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: c }} />)}
            <span className="ml-2 text-[0.72rem] text-white/30 font-mono">snippet.js</span>
          </div>
          <div className="p-6 font-mono text-base leading-[1.8] tracking-[0.02em] break-all min-h-[80px]">
            {snippet.split('').map((char, i) => <span key={i} className={getCharClass(i)}>{char}</span>)}
            {!started && <span className="text-brand-400 animate-blink font-thin">|</span>}
          </div>
        </div>

        <div className="h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-500 to-brand-300 rounded-full transition-[width] duration-100"
            style={{ width: `${snippet ? (typed.length / snippet.length) * 100 : 0}%` }} />
        </div>

        <input ref={inputRef} value={typed} onChange={handleInput} disabled={finished}
          placeholder={g.placeholder}
          className="w-full px-4 py-3.5 bg-white/[0.06] border border-brand-400/30 rounded-lg text-white text-[0.9rem] font-mono outline-none transition-colors placeholder:text-white/25 focus:border-brand-400 focus:bg-white/[0.08] mb-4"
          spellCheck={false} autoComplete="off" autoCorrect="off" autoCapitalize="off" />

        {finished && (
          <div className="bg-brand-400/10 border border-brand-400/30 rounded-lg p-6 text-center mb-4">
            <div className="text-[2.5rem] mb-2">🎉</div>
            <h3 className="font-display font-bold text-white mb-2">{g.finished}</h3>
            <p className="text-brand-200 text-[0.9rem] mb-2"
              dangerouslySetInnerHTML={{ __html: g.finishedSub(wpm, accuracy, time).replace(/(\d+\s?WPM|\d+%|\d+s)/g, '<strong class="text-brand-300">$1</strong>') }} />
            <div className="text-[1.1rem] font-semibold text-white mt-2">{rating}</div>
          </div>
        )}
        <button className="btn btn--primary mt-2" onClick={newSnippet}><i className="fas fa-shuffle" /> {g.newSnippet}</button>
      </div>
    </section>
  )
}

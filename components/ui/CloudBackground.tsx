'use client'

const CLOUDS = [
  { id: 1, w: 300, top: '4%',  opacity: 0.055, dur: 62, delay: 0    },
  { id: 2, w: 210, top: '20%', opacity: 0.040, dur: 84, delay: -24  },
  { id: 3, w: 370, top: '37%', opacity: 0.048, dur: 54, delay: -40  },
  { id: 4, w: 240, top: '56%', opacity: 0.036, dur: 76, delay: -14  },
  { id: 5, w: 290, top: '73%', opacity: 0.050, dur: 92, delay: -55  },
  { id: 6, w: 185, top: '88%', opacity: 0.033, dur: 68, delay: -46  },
]

function Cloud() {
  return (
    <svg viewBox="0 0 220 75" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <ellipse cx="55"  cy="54" rx="42" ry="21" />
      <ellipse cx="92"  cy="40" rx="40" ry="28" />
      <ellipse cx="138" cy="46" rx="37" ry="24" />
      <ellipse cx="172" cy="54" rx="30" ry="18" />
      <ellipse cx="25"  cy="57" rx="26" ry="16" />
    </svg>
  )
}

export default function CloudBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 5 }}
      aria-hidden="true"
    >
      {CLOUDS.map(c => (
        <div
          key={c.id}
          className="absolute cloud-drift text-brand-500 dark:text-brand-400"
          style={{
            top: c.top,
            width: c.w,
            opacity: c.opacity,
            animationDuration: `${c.dur}s`,
            animationDelay: `${c.delay}s`,
            filter: 'blur(5px)',
            willChange: 'transform',
          }}
        >
          <Cloud />
        </div>
      ))}
    </div>
  )
}

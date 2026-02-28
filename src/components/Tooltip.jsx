'use client'
import { useState } from 'react'

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false)

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(!visible)}
    >
      {children}

      {visible && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-yellow-600 text-white text-xs px-3 py-1 rounded whitespace-nowrap z-50">
          {text}
          {/* little arrow pointing down */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-yellow-600" />
        </div>
      )}
    </div>
  )
}
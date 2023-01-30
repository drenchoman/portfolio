import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'

export default function Theme() {
  const {theme, systemTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  const setDark = () => {
    setTheme('dark')
    console.log(theme)
  }

  const setLight = () => {
    setTheme('light')
    console.log(theme)
  }

  useEffect(() => setMounted(true),[])
  if (!mounted) return null
  return (
    

    <div>
      <div>
        <div>

        </div>
        <span>Light</span>
        </div>
    <button onClick={setLight}>Light Mode</button>
    <button onClick={setDark}>Dark mode</button>
    </div>
  )
}

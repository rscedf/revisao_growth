import { useRef, useState, useEffect } from 'react'

export default function DeboucePage() {
  const debounce = useRef(null)
  const [text, setText] = useState('')

  const searchData = () => {
    console.log('...searching data...')
    console.log(text)
  }

  const handleTextInput = (event, onChange) => {
    onChange(event.target.value)
  }

  useEffect(() => {
    if (debounce.current) clearInterval(debounce.current)

    debounce.current = setTimeout(searchData, 2000)
  }, [text])

  return (
    <div>
      <h4>Debouce</h4>
      <input type="text" value={text} onChange={(e) => handleTextInput(e, setText)} />
    </div>
  )
}

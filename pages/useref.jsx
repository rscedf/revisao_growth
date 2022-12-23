import { useRef } from 'react'

export default function UseRefPage() {
  // armazenar numero como constante
  const numero = useRef(10)
  // ao clicar botão da o foco no input
  const inputRef = useRef(null)

  return (
    <>
      <div>
        <h4>UseRef Exemplo</h4>
        <p>Numero: {numero.current}</p>
      </div>

      <div>
        <h4>Exemplo com referência no input</h4>
        <input type="text" ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Foco Input</button>
      </div>
    </>
  )
}

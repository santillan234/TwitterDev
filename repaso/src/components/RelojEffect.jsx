import { useEffect, useState } from "react"

export default function RelojEffect () {
  const [hora, setHora] = useState(new Date().toLocaleTimeString())
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let temporizador;

    if (visible) {
      setInterval( () => {
        setHora(new Date().toLocaleTimeString())
      }, [1000])
    } else {
      clearInterval(temporizador)
    }
    return () => {
      clearInterval(temporizador)
    }

  }, [visible])

  return(
    <>
      <h1>Reloj</h1>
      {visible? <h2>{hora}</h2> : null}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </>
  )

}
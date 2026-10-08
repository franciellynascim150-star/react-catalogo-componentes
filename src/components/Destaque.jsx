function Destaque({ titulo, texto }) {
  return (
    <div className="destaque">

      <div className="icone-destaque">★</div>

      <h3>{titulo}</h3>

      <p>{texto}</p>

    </div>
  )
}

export default Destaque
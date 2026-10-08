function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  return (
    <div className="card-curso">

      <div className="card-cabecalho">
        <span className="icone">💻</span>
        <span className="nivel">{nivel}</span>
      </div>

      <h3>{nome}</h3>

      <div className="info-curso">
        <div>
          <span>Duração</span>
          <strong>{duracao}</strong>
        </div>

        <div>
          <span>Modalidade</span>
          <strong>{modalidade}</strong>
        </div>
      </div>

      <div className="linha"></div>

      {vagas > 0 ? (
        <p className="vagas">
          ✓ {vagas} vagas disponíveis
        </p>
      ) : (
        <p className="sem-vagas">
          ✕ Turma completa
        </p>
      )}

    </div>
  )
}

export default CardCurso
import musicas from '../data/database'

const List = () => {

  return(
    <div>
      <h2>Minha Lista de Músicas</h2>
        <ul>
            {musicas.map (musica =>
            <li key={musica.nome}>{musica.letra}<img src= {musica.imagem} alt="Fotos das bandas"/></li>
            )}
        </ul>
    </div>
  )

}
  
export default List
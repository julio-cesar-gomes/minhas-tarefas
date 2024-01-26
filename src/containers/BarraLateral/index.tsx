import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        ></S.Campo>
        <S.Filtros>
          <FiltroCard legenda="Pendentes" contador={3}></FiltroCard>
          <FiltroCard legenda="Concluidas" contador={4}></FiltroCard>
          <FiltroCard legenda="Urgentes" contador={2}></FiltroCard>
          <FiltroCard legenda="Importantes" contador={1}></FiltroCard>
          <FiltroCard legenda="Normais" contador={10}></FiltroCard>
          <FiltroCard legenda="Todas" contador={20} ativo></FiltroCard>
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral

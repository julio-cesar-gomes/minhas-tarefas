import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enuns from '../../utils/unums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enuns.Prioridade
  status?: enuns.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enuns.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enuns.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enuns.Status.PENDENTE) return variaveis.amarelo2
    if (props.status === enuns.Status.CONCLUIDA) return variaveis.verde
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  color: #fff;
  font-weight: bold;
  background-color: ${(props) => retornaCorFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

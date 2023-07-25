import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    margin-top: 16px;
  }

  margin-top: ${(props) => props.marginTop || '0'};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid transparent;
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 16px;
  }
`
export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  border: 1px solid transparent;
  height: 32px;
  margin-right: 16px;
  padding: 0 8px;
  margin-bottom: 24px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`

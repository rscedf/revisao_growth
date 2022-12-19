import styled from 'styled-components'

// eslint-disable-next-line no-unused-vars
const StyledTitle = styled.h1`
  color: ${(props) => props.theme.primary};
`
export default function Title(props) {
  return <StyledTitle>{props.children}</StyledTitle>
}

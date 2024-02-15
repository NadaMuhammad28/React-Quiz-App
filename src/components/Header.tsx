import styled, { createGlobalStyle } from 'styled-components';

function Header() {
  return (
    <Wrapper className='app-header'>
      <img src='logo512.png' alt='React logo' />
      <h1>The React Quiz</h1>
    </Wrapper>
  );
}

export default Header;
const Wrapper = styled.header`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  img {
    width: 5rem;
    height: 5rem;
  }
`;

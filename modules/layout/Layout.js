import styled from "styled-components";

const LayoutStyled = styled.div`
  min-height: 100vh;
  --navbar-gap: 8.3rem;
`;

const Main = styled.main`
  padding-top: var(--navbar-gap);
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <LayoutStyled className="layout">
        <Main>{children}</Main>
      </LayoutStyled>
    );
  }
}

export default Layout;

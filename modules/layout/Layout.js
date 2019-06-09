import styled from "styled-components";
import { Titulo1 } from "../ui/Tipografia";

const LayoutStyled = styled.div`
  min-height: 100vh;
  --navbar-gap: 8.3rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Main = styled.main`
  margin-top: 2rem;
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <LayoutStyled className="layout">
        <Header>
          <Titulo1 grande>Filmes ML 🎬</Titulo1>
        </Header>
        <Main>{children}</Main>
      </LayoutStyled>
    );
  }
}

export default Layout;

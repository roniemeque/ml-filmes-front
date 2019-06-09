import styled from "styled-components";

const HomeStyled = styled.div``;

function Home({ promocoes, destaques }) {
  return <HomeStyled>cool 😎</HomeStyled>;
}

Home.getInitialProps = async ({ req }) => {
  console.log("home initial props");
};

export default Home;

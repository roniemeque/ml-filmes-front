import PropTypes from "prop-types";
import styled from "styled-components";

const IconSVG = styled.svg`
  width: ${props => props.tamanho};
  height: ${props => props.tamanho};
  fill: ${props => props.cor};
`;

const Icon = ({ tamanho, cor, icon, className }) => (
  <IconSVG tamanho={tamanho} cor={cor} className={className}>
    <use xlinkHref={`/static/icons/symbol-defs.svg#icon-${icon}`} />
  </IconSVG>
);

Icon.propTypes = {
  tamanho: PropTypes.string,
  cor: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  tamanho: "6rem",
  cor: "#fff",
};

export default Icon;

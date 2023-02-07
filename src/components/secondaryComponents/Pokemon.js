import styled from "styled-components";

function Pokemon({ id, name }) {
  return (
    <Wrapper>
      <Image
        url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      ></Image>
      <Name>{name}</Name>
    </Wrapper>
  );
}

const Image = styled.div`
  border-radius: 50%;
  min-width: 80px;
  min-height: 80px;
  background: url(${(props) => props.url}) center center no-repeat;
  background-color: #fff;

  &:hover {
    background-color: black;
  }
`;

const Wrapper = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  margin: 10px;
  cursor: pointer;
`;

const Name = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 12px
  margin-top: 10px;
`;

export default Pokemon;

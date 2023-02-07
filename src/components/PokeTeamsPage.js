import { useNavigate, Link } from "react-router-dom";
import UserContext from "../contexts/UserContext.js";
import { useContext, useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import services from "../services/pokedexAPI.js";
import {
  Wrapper,
  Title,
  LoginContainer,
  New,
  LoginForm,
  LoginButton,
} from "../styles/PoketeamsStyle.js";
import { authenticationSchema } from "../schemas/authenticationSchemas.js";
import pokemonServices from "../services/pokemonAPI.js";
import PokemonWrapper from "./secondaryComponents/PokemonWrapper.js";

function PokeTeamsPage() {
  const [isDisable, setIsDisable] = useState(false);
  const [poketeams, setPokeTeams] = useState(null);
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const navigate = useNavigate();

  useEffect(() => {
    setIsDisable(true);
    services.getPoketeam(user.token).then((response) => {
      setPokeTeams(response.data);
      setIsDisable(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleForm(e) {
    e.preventDefault();
    setIsDisable(true);
    const [nickname, password] = e.target;

    const body = {
      nickname: nickname.value,
      password: password.value,
    };

    const { error } = authenticationSchema.validate(body);

    if (error !== undefined) alert("verify your data");
    services
      .postSignUp(body)
      .then(async (res) => {
        return navigate("/");
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 422) {
          alert(`Please verify your data, ${error.response.data}`);
        } else if (error.response.status === 409) {
          alert(`You can not use this nickname.`);
        }
        setIsDisable(false);
      });
  }

  if (isDisable || poketeams === null) {
    return (
      <ThreeDots
        height="180"
        width="180"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }

  return (
    <Wrapper>
      <PokemonWrapper />
    </Wrapper>
  );
}

export default PokeTeamsPage;

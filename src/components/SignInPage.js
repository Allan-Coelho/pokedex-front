import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/UserContext.js";
import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import services from "../services/pokedexAPI.js";
import {
  Wrapper,
  Title,
  LoginContainer,
  New,
  LoginForm,
  LoginButton,
} from "../styles/AuthenticationStyle.js";
import { authenticationSchema } from "../schemas/authenticationSchemas.js";

function SignIn() {
  const { user, setUser } = useContext(UserContext);
  const [isDisable, setIsDisable] = useState(false);

  const load = isDisable ? (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#FFFFFF"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  ) : (
    "Log In"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return navigate("/poketeams");
    }
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
      .postSignIn(body)
      .then((res) => {
        localStorage.setItem(
          "profile",
          JSON.stringify({
            token: res.data.token,
            nickname: res.data.user.nickname,
            id: res.data.user.id,
          })
        );
        setUser(JSON.parse(localStorage.getItem("profile")));
        return navigate("/poketeams");
      })
      .catch((error) => {
        console.error(error);
        alert(`Incorrect email or password, please verify the inserted data`);
        setIsDisable(false);
      });
  }

  return (
    <Wrapper>
      <Title>Pokédex</Title>
      <LoginContainer>
        <LoginForm onSubmit={handleForm}>
          <input
            type="text"
            name="nickname"
            placeholder="nickname"
            disabled={isDisable}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            disabled={isDisable}
            required
          />
          <LoginButton disabled={isDisable}>{load}</LoginButton>
          <Link to={`/signup`}>
            <New>First time? Create an account!</New>
          </Link>
        </LoginForm>
      </LoginContainer>
    </Wrapper>
  );
}

export default SignIn;

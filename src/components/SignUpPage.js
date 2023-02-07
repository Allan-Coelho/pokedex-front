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
} from "../styles/AuthenticationStyle.js";
import { authenticationSchema } from "../schemas/authenticationSchemas.js";

function SignUp() {
  const [isDisable, setIsDisable] = useState(false);
  const { user } = useContext(UserContext);

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
    "Sign Up"
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

  return (
    <Wrapper>
      <Title>Pokédex</Title>
      <LoginContainer>
        <LoginForm onSubmit={handleForm}>
          <input
            type="text"
            name="username"
            placeholder="username"
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
          <Link to={`/`}>
            <New>Switch back to login</New>
          </Link>
        </LoginForm>
      </LoginContainer>
    </Wrapper>
  );
}

export default SignUp;

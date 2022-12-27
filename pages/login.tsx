import { Container, Main } from "../styles/sharedstyles";
import LoginForm from "../components/LoginForm";
import { LoginContainer } from "../styles/loginstyles";

export default function Login() {
  return (
    <Container>
      <Main>
        <LoginContainer>
          <LoginForm />
        </LoginContainer>
      </Main>
    </Container>
  );
}

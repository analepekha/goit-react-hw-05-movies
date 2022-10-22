import { useNavigate } from "react-router-dom";
import { Container, Title, BtnGoBack} from "./NotFoundPage.styled";

const NotFoundPage = () => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <Container>
            <Title>Oops... the page you were looking for is not found</Title>
            <h2>Come back to Home and try again</h2>
            <BtnGoBack onClick={goBack}>Go Back</BtnGoBack>
        </Container>
      )
}

export default NotFoundPage;
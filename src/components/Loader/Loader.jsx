import { Oval } from 'react-loader-spinner';
import { Container } from './Loader.styled';


export const Loader = () => {
    return (
        <Container>
            <Oval
                height={80}
                width={80}
                color="#1a526c"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#1a526c"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </Container>
    )
}

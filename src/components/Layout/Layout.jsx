import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";
import { Container, Header, Link, Nav} from "./Layout.styled";

const Layout = () => {
    return (
        <>
            <Header>
                <Nav>
                    <Link to='/' end >Home</Link>
                    <Link to='/movies'>Movies</Link>
                </Nav>
            </Header>
            <Container>
                <Suspense fallback={<Loader/>}>
                <Outlet />
                </Suspense>
            </Container>
        </>
    )
}

export default Layout;
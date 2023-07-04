import NavList from "./NavList";
import Main from "./Main";
import Footer from "./Footer";


export default function AppLayout({children}) {
    return (
        <>
                <Main />
                <NavList />
                {children}
                <Footer />

        </>
    );
}
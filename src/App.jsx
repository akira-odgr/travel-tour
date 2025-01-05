import { Navbar } from "./components/Navbar/Navbar";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Choose } from "./components/Choose/Choose";
import { Popular } from "./components/Popular/Popular";
import { Explore } from "./components/Explore/Explore";
import { Client } from "./components/Client/Client";

export const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Choose />
            <Popular />
            <Explore />
            <Client />
        </>
    );
};

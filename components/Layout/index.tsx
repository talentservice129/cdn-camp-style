import Head from "next/head";
import CustomCursor from "../CustomCursor";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutInterface{
    children: any;
    pageTitle ?: string;
    enableCustomCursor ?: boolean;
    enableNavbar?: boolean;
    enableFooter ?: boolean;
}

const Layout = ({ children, pageTitle, enableCustomCursor, enableFooter, enableNavbar }: LayoutInterface) => {
    return (
        <>
            <Head>
                <title>Rivage | {pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            </Head>
            {enableNavbar && <Navbar />}
            <div className="min-h-screen  mx-auto">
                {enableCustomCursor && <CustomCursor />}
                <main className=" ">
                    {children}
                </main>
            </div>
            {enableFooter && <Footer />}
        </>
    );
};

export default Layout;

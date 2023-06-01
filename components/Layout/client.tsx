import CustomCursor from "../CustomCursor";
import Head from "next/head";
import ClientNavbar from "../Client/Navbar";

interface LayoutInterface{
    children: any;
    pageTitle ?: string;
    enableCustomCursor ?: boolean;

    enableNavbar ?: boolean;
}

const ClientLayout = ({ children, pageTitle, enableCustomCursor, enableNavbar }: LayoutInterface) => {
    return (
        <>
            <Head>
                <title>Rivage | {pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            </Head>
            {enableNavbar && <ClientNavbar />}
            <div className="min-h-screen dark:bg-dark-100 bg-white mx-auto">
                {enableCustomCursor && <CustomCursor />}
                <main className="container mx-auto px-2 rounded">
                    {children}
                </main>
            </div>
        </>
    )
}

export default ClientLayout
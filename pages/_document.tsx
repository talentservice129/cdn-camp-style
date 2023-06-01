import { Html, Head, Main, NextScript } from 'next/document'
import useRouter from 'next/router'

export default function Document() {
    // @ts-ignore

    return (
        <Html className='dark'>
            <Head />
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
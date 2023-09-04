import { Html, Head, Main, NextScript} from 'next/document'

export default function Document(){
    return(

        /**
         * 
         */
        <Html>
            <meta name="decription" content='GuitarLA - Venta de guitarra y blog de musica' />
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
                <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Lato:wght@400;700;900&family=Lora:wght@600&family=Outfit:wght@400;700;900&family=Playfair:wght@700&family=Roboto:wght@300&family=Sofia+Sans+Condensed:ital@1&display=swap" rel="stylesheet" />
                <link rel='stylesheet'  href='https://necolas.github.io/normalize.css/8.0.1/normalize.css' />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
/* Arquivo utilizado no Next.js para ter acesso e editar o arquivo index.html da página public.
Essa pagina carrega uma única vez, sendo assim, colocamos arquivos estáticos da app nela. */

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
       return (
        <Html>
            <Head>  
                <link rel="shortcut icon" href="favicon.png" type="image/png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
            </Head>
            <body>  
                <Main />
                <NextScript />
            </body>
        </Html>
       ); 
    }
}
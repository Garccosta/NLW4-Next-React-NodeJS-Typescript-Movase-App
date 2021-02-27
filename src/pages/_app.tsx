// Todos os elementos que se repetem em todas as paginas do app são colocadas aqui

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

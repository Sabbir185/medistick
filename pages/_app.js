import '../styles/app.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css'
import 'bootstrap/scss/bootstrap.scss'


function MyApp({ Component, pageProps }) {
	
  return (
        <>
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp

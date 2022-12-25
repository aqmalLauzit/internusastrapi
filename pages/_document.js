/* eslint-disable @next/next/no-sync-scripts */
import Document, {Html, Head,  NextScript, Main} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
    render(){
        return (
            <Html lang="en">
                <Head>
                <meta charSet="utf-8" />
                {/* Favicons */}
                
                {/* Google Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap"
                    rel="stylesheet"
                ></link>
                {/* Vendor CSS Files */}
                <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet" ></link>
                <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" ></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
                <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" ></link>
                <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" ></link>
                <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" ></link>
                <link href="/assets/css/style.css" rel="stylesheet" ></link>
                <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" ></script>
                




                </Head>
                <body>
                    <Main />
                    <NextScript />


                    
        

                      
  
                </body>

            </Html>
        )
    }

}

export default MyDocument;
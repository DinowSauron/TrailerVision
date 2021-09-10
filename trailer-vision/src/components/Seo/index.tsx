import Head from 'next/head'
//https://search.google.com/search-console/not-verified?original_url=/search-console/ownership&original_resource_id


export interface seoImageProps {
    rawUrl: string;
    type: 'image/gif' | 'image/apng' | 'image/jpeg' | 'image/png';
    width: string;
    height: string;
    alt: string;
}
export interface seoVideoProps {
    rawUrl: string;
    width: string;
    height: string;
}

interface seoProps {
    siteTitle: string;
    siteName?: string;
    pageUrl?: string;
    image?: seoImageProps | null;
    description?: string;
    keywords?: string;
    twitterId?: string; // With @
    language?: string;
    video?: seoVideoProps | null;
}


// Fill the default values here:
const Configs = {
    siteTitle: "TrailerVision",
    siteName: "Trailer Vision",
    pageUrl: process.env.ABSOLUTE_URL,
    description: "Aqui você encontra os trailers e informações de diversos filmes, além de visualizar os trailers deles e onde é possível assisti-los",
    keywords: "Filme,Trailer,Strem,Assistir,Encontrar filmes,Lançamentos,Home,pagina inicial,procurar",
    twitterId: "@", // With @
    language: "pt-BR",
    image: {
        rawUrl: process.env.ABSOLUTE_URL + "/icons/site-logo.svg",
        type: "image/png",
        width: "200",
        height: "200",
        alt: "Site Logo",
    },
    video: null,

    googleVerification: "",
}

/**
 * Set Search Engine Optimization Tags 
 * 
 * title is required!
 */
export function Seo(props: seoProps){
    
    const siteTitle = props.siteTitle || Configs.siteTitle;
    const siteName = props.siteName || Configs.siteName;
    const pageUrl = props.pageUrl || Configs.pageUrl;
    const description = props.description || Configs.description;
    const keywords = props.keywords || Configs.keywords;
    const twitterId = props.twitterId || Configs.twitterId;
    const googleVerification = Configs.googleVerification;
    const language = props.language || Configs.language;

    const video = props.video || Configs.video;
    const image = props.image || Configs.image;
    // console.log(image.rawUrl);
    return (
        <div>
            <Head>
                
                {/* Open Graph */ }
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content={siteName}/>
                <meta property="og:locale" content={language}/>
                <meta property="og:url" content={pageUrl}/>

                <meta data-react-helmet="true" property="og:title" content={siteName}/>
                <meta property="og:title" content={siteName}/>
                <meta data-react-helmet="true" property="og:keywords" content={keywords}/>
                <meta property="og:keywords" content={keywords}/>
                <meta data-react-helmet="true" property="og:description" content={description}/>
                <meta property="og:description" content={description}/>

                {(image.rawUrl != "" && video == null) ? (<>
                    <meta data-react-helmet="true" property="og:image" content={image.rawUrl}/>
                    <meta property="og:image:url" content={image.rawUrl}/>
                    <meta property="og:image" content={image.rawUrl}/>
                    <meta property="og:image:type" content={image.type}/>
                    <meta property="og:image:width" content={image.width}/>
                    <meta property="og:image:height" content={image.height}/>
                    <meta property="og:image:alt" content={image.alt}/>
                </>) : ("")}

                {(video != null) ? (<>
                    <meta property="og:video" content={video.rawUrl}/>
                    <meta property="og:video:width" content={video.width}/>
                    <meta property="og:video:height" content={video.height}/>
                </>):("")}
                

                {/* Twitter Graph */ }
                <meta data-react-helmet="true" property="twitter:image" content={image.rawUrl}/>
                <meta property="twitter:image" content={image.rawUrl}/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content={siteName}/>
                <meta property="twitter:description" content={description}/>

                {(twitterId != "@") ? (<>
                    <meta property="twitter:site" content={twitterId}/>
                    <meta property="twitter:site:id" content={twitterId}/>
                    <meta property="twitter:creator" content={twitterId}/>
                    <meta property="twitter:creator:id" content={twitterId}/>
                </>): ("")}
                

                {(googleVerification != "") ? (
                <meta name="google-site-verification" content={googleVerification} />
                ):("")}

                <title>{siteTitle}</title>
                <meta property="description" content={description}/>
                <link rel="canonical" href={process.env.ABSOLUTE_URL}></link>
            </Head>
        </div>
    );
}


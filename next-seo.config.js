const pageTitle = "Chittawela - Heartfulness";
const pageDescription = "Find yourself and heal your body, mind, and spirit in the holistic experience of Chittawela. Our one-week holiday retreat has a perfect balance providing the levels of care and comfort necessary to enjoy the well-being that comes from within.";
const pageCanonical = "https://www.chittawela.com";
const facebookTitle = "Chittawela: Now is Time to Soothe Your Soul";
const facebookDescription = pageDescription;
// import facebookCard from '../../assets/images/chittawela_colour_text_under.jpg';

const SEO = 
{
    // Set 'noindex: true' in development 
    noindex: true,
    // Google: 
    title: `${pageTitle}`,
    description: `${pageDescription}`,
    canonical: `${pageCanonical}`,
    // Facebook:
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: `${pageCanonical}`,
        title: `${facebookTitle}`,
        description: `${facebookDescription}`,
        defaultImageWidth: 1200,
        defaultImageHeight: 1200   
    }   
};

export default SEO;




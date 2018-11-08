import withLayout from '../components/hoc/withLayout';
// import Layout from '../layouts/Layout';

const TEXT = "จิตตเวฬา - Chittawela In Pali-Sanskrit language Chittawela means the time for your heart." 
// As the world and your lives seem to go ever faster, you need Chittawela - 
// a moment to step back and become aware of where are you. 
// This time helps you to reconnect to your heart and soul, to what truly matters to you. 
// This time for your heart, this moment of calm and reflection, is what we offer in two 
// rejuvenating retreats. Take a time to reflect and connect with your heart and soul. 
// Experience the beautiful surroundings, fascinating culture and a healthy lifestyle. 
// Exchange inspiration with other guests."

export default withLayout(() => (
    <p>{TEXT}</p>
));


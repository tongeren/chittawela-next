// import withLayout from '../components/hoc/withLayout';
import Layout from '../layouts/Layout';
// import classes from './contact.module.css';

export default () => (
  <Layout>
    <h1 className={'Title'}>Contact Us!</h1>
    <p className={'Contact'}>Chittawela<br />
        99/589 Mubaan Phimuk 1<br /> 
        Phase 6 Soi 20<br />
        T. Sansainoi A. Sansai<br />
        50210 Chiang Mai<br />
        M: +66 (0) 97 918 3180<br />
        info@chittawela.com<br />
    </p>
    <style jsx>{`
      .Title {
        font-family: 'Cormorant', serif;
        color: whitesmoke;
        font-size: 8vw;
        text-shadow: rgba(0,0,0,0.6) 0.2vw 0.2vw 1vw;
        letter-spacing: -0.06vw;
      }

      .Contact {
        padding: 2vw 4vw 2vw 4vw;
      }
    `}  
    </style>
  </Layout>  
);



import Layout from '../../layouts/Layout';

export default (Component) => (props) => (
    <Layout>
        <Component {...props}/>
    </Layout>
);


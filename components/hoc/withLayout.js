import Layout from '../../layouts/Layout';

export default (WrappedComponent) => (props) => (
    <Layout>
        <WrappedComponent {...props}/>
    </Layout>
);


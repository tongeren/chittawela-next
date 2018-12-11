import { Fragment } from 'react';
import withLayout from '../components/hoc/withLayout';
import withCloudinaryContext from '../components/hoc/withCloudinaryContext';
import PricingLayout from '../components/components/UI/PricingLayout/PricingLayout';
import EmptyBox from '../components/components/UI/EmptyBox/EmptyBox';

export default withLayout(withCloudinaryContext(() => (
    <Fragment>
        <EmptyBox width={'100vw'} height={'3vh'} />
        <PricingLayout />
    </Fragment>
)));

import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Form from './Form';

export default class Donate extends React.Component<IDonateProps, IDontateState> {

    render() {
        return (
            <>
            <StripeProvider apiKey="pk_test_jiPruM3z70j0gzQUfeXC1ZcO00pzuMCVdZ">
                <Elements>
                    <Form />
                </Elements>
            </StripeProvider>
            </>
        )
    }
}

interface IDonateProps {}

interface IDontateState {}
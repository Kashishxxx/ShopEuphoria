import StripeCheckout from 'react-stripe-checkout';
const App = () => {
    return (
        <Router>
            <switch>
                <Route path="/pay">
                    <Pay />
                </Route>
                <Route path="/success">
                    <Success />
                </Route>
            </switch>
        </Router>
    );
};

export default App;
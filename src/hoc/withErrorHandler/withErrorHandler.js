import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                error: false
            };

            axios.interceptors.request.use(req => {
                this.setState({ error: false });
                return req;
            });

            axios.interceptors.response.use(req => req, error => {
                this.setState({ error: error });
            });
        }

        // componentDidMount() {
        //     axios.interceptors.request.use(req => {
        //         this.setState({ error: null });
        //         return req;
        //     });
        //     axios.interceptors.response.use(req => req, error => {
        //         this.setState({ error: error });
        //     });
        // };

        errorConfirmedHandler = () => {
            this.setState({ error: false })
        };

        render() {
            return (
                <>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        };
    };
};


export default withErrorHandler;
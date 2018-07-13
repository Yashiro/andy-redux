// custom react-redux
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from './andy-redux'

export const connect = (mapStateToProps=state=>state, mapDispatchToProps={}) => (Wrapcomponent) => {
    return class ConnectComponent extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(props, context) {
            super(props, context)
            this.state = {
                props: {}
            }
        }

        componentDidMount() {
            const { store } = this.context
            store.subscribe(() => this.update())
            this.update()
        }
        
        update() {
            const { store } = this.context
            const stateProps = mapStateToProps(store.getState())
            const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
            this.setState({
                props: {
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }

        render() {
            return <Wrapcomponent {...this.state.props}></Wrapcomponent>
        }
    }
}

export class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return {store: this.store}
    }

    constructor(props, context) {
        super(props, context)
        this.store = props.store
    }

    render() {
        return this.props.children
    }
}
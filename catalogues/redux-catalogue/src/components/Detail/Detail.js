import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Detail extends Component {
    static propTypes() {
        return {
            actions: PropTypes.object.isRequired
        }
    }

    componentWillMount() {
        this.props.actions.getSingleData(this.props.match.url);
    }

    render() {
        const { data } = this.props;

        return (
            <h2>Detail: { data && data.title }</h2>
        );
    }
}

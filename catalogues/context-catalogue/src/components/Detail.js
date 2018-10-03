import React, { Component } from 'react';

export default class Detail extends Component {
    render() {
        const { data } = this.props;

        return (
            <h2>Detail: { data && data.title }</h2>
        );
    }
}

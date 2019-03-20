import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    };
    handleWorldButton = e => {
        this.setState({ who: 'world' })
    }
    handleFriendButton = e => {
        this.setState({ who: 'friend '})
    }
    handleReactButton = e => {
        this.setState({ who: 'react' })
    }

    render(){

        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button id='world' onClick={this.handleWorldButton}>World</button>
                <button id='friend' onClick={this.handleFriendButton}>Friend</button>
                <button id='react' onClick={this.handleReactButton}>React</button>
            </div>
        )}
    }

export default HelloWorld
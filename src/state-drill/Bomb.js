import React from 'react';

class Bomb extends React.Component{
    state = {
        count: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return(
            <div>
                <p>tick</p>
            </div>
        )
    }
}

export default Bomb;
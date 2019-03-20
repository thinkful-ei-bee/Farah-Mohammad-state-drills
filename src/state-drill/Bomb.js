import React from 'react';

class Bomb extends React.Component{
    state = {
        count: 0
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    displayCounts(){
        let count = '';
        if (this.state.count % 2 === 0 && this.state.count <= 8){
            count = 'tick'
        }
        else if (this.state.count % 2 !== 0 && this.state.count <= 8){
            count = 'tock';
        }
        else {
            count = 'BOOM!!!';
            clearInterval(this.interval);
        }
        console.log(count)
        return count;
    }


    render() {
        return(
            <div>
                <p>
                {this.displayCounts()}
                </p>
            </div>
        )
    }
}

export default Bomb;
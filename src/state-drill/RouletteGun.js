import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber: 8,
    }
    
    state ={
        chamber: null,
        spinningTheChamber: false,
    }

    handleButton(){    
        this.setState({ spinningTheChamber: true })
        this.timeout = setTimeout(() => {  
            let randomNum = Math.ceil(Math.random() * 8);
            this.setState({ 
                chamber: randomNum,
                spinningTheChamber: false 
            })
        }, 2000);
    }
    displayRender(){
        let message = '';
        if (this.state.spinningTheChamber === true){
            message = 'spinning the chamber and pulling the trigger!'
        }
        else if (this.state.chamber === this.props.bulletInChamber){
            message = 'BANG!!!!';
        }
        else {
            message = "you're safe!";
            clearTimeout(this.timeout);
        }
        return message;
    }

    render(){
        return(
            <div>
                <p>{this.displayRender()}</p>
                <button onClick={() => this.handleButton()}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;
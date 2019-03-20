import React from 'react';

class Accordion extends React.Component{
    state = {
        showContent: null,
    }

    handleButton(index){
        this.setState({
            showContent: index
        });
        console.log(this.state.showContent)
    }
    renderButton(){
        const buttons = this.props.accordionSections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleButton(index)}> {section.title}</button>
                <p>{this.renderContent(index)}</p>
            </li>
        ))
        return buttons;
    }
    renderContent(index){
        if (index === this.state.showContent) {
            const currentButton = this.props.accordionSections[this.state.showContent]
            return (
                <p className="content">
                    {currentButton.content}
                </p>
            ) 
        }
    }

    render(){
        return(
            <ul>
                {this.renderButton()}
            </ul>
        )
    }
}

export default Accordion;
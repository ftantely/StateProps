import React from 'react'
import Form from './form'
import GreetingInput from "./GreetingInput";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={introduction:"Insert your input here"}
    }


    onChange(introduction){
        this.setState({introduction:introduction})
    }


    render(){
        return(
                    <div>
                        <Form introduction={this.state.introduction}/>
                        <GreetingInput introduction={this.state.introduction} updateChange={this.onChange.bind(this)}/>

                    </div>


        );
    }
}

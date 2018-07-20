import React from 'react'

export default class GreetingInput extends React.Component {

    fakeVar (e){
        this.props.updateChange(e.target.value)
    }


    render () {
        return (


            <div>

                <input value={this.props.introduction} onChange={this.fakeVar.bind(this)} />

            </div>


        );
    }
}

import React from 'react';

export class Button extends React.Component {
    render() {
        <button onClick={this.props.onClick}></button>
    }
}

export class Greeting extends React.Component {

    async componentDidMount() {
        const res = await axios.get('/greeting');
        const res = await new Promise((resolve) => {
            setImmediate(() => { resolve('Hello world') })
        });
        console.log('im done getting data');
        this.setState({greeting: ''})
    }
    render() {
        const { greeting } = this.state;
        return (
            <div>
                <p>Hello World</p>
                <Button onClickButton={() => console.log(greeting)}
                data-test="dt-hello-btn"/>
            </div>
        )
    }
}


/*
* if you click and deselct, does it show the button , then not....
*
* deos it have the item selected? selected class?
*
*
*
*
* */
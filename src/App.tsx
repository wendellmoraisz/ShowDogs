import React, { Component } from "react";
import styled from "styled-components";

interface Props { }
interface State {
    imgURL: string
    buttonMessage: 'Show a dog' | 'Change dog'
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            imgURL: '',
            buttonMessage: 'Show a dog',
        };
    };

    render() {
        const baseURL: string = 'https://dog.ceo/api/breeds/image/random';
        const getDog = async () => {
            await fetch(baseURL)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                       imgURL: json.message,
                       buttonMessage: 'Change dog',
                   });
                })
                .catch(e => console.log(e));
        };

        const { buttonMessage, imgURL } = this.state;

        return (
            <Wrapper>
                <Main>
                    <h1>Just... dogs!</h1>
                    <DogIMG src={imgURL} />
                    <Button onClick={getDog}>{buttonMessage}</Button>
                </Main>
            </Wrapper>
        );
    };
};

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    font-family: 'Akshar', sans-serif;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DogIMG = styled.img`
    align-self: center;
    max-width: 600px;
	border-radius: 10px;
`;

const Button = styled.button`
    border: 0;
    width: 200px;
    font-family: 'Akshar', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 16px;
    background: #3498db;
    color: white;
    margin: 20px 0;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background: #2980b9;
    }
`;

export default App;
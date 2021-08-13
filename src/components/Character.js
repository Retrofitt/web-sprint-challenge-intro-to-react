// Write your Character component here

import styled from 'styled-components'


 export default function Character(props){
    const {char} = props;


    const CharacterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `

    const NameBorders = styled.p`
    display: flex;
    color: white;
    background-color:lightcoral;
    justify-content: center;
    align-items: center;
    height: 3vh;
    width: 20%;
    border-radius: 5px;
    `

    return (
        <CharacterDiv className='Names'>
            <NameBorders>{char.name}</NameBorders>
        </CharacterDiv>
        )
}
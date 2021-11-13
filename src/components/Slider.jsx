import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import {useState}from "react"

const Container=styled.div`
width:100%;
height:100vh;
display: flex;
position: relative;
overflow:hidden;
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position:absolute;
left: ${props=> props.direction==="left"&&"10px"};
right: ${props=> props.direction==="right"&&"10px"};
cursor: pointer;
opacity:0.5;
top:0;
bottom: 0;
margin: auto;
z-index:2 ;
`


const Wrapper=styled.div`
height:100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(#${props=>props.slideIndex* -100}vw);
`

const Slide=styled.div`
display: flex;
align-items: center;
width:100vw;
height:100vh;
background-color:#${props=>props.bg};
padding:50px;
`;


const ImgContainer=styled.div`
flex:1;
height:100%;
margin: 20px;
margin-top:20px;
padding-top:20px;`

const Image=styled.img`
height:100%;
`

const InfoContainer =styled.div`
flex:1;`

const Title=styled.h1`
font-size: 70px;

`
const Desc=styled.p`
margin:50px 0px;
font-size: 20px;
font-weight:500;
letter-spacing: 30px;

`
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;

`

const Slider = () => {
    const [slideIndex, setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0? slideIndex-1:2);
        } else {
            setSlideIndex(slideIndex<2?slideIndex +1:0);
        }

    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
             <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                <Slide>
                
                <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"/>
                </ImgContainer>
                <InfoContainer>

                    <Title>summer deals</Title>
                    <Desc>dont compromise on style! get flat 20%off.</Desc>
                    <Button>shop now</Button>
                </InfoContainer>

</Slide>
<Slide>
                
                <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"/>
                </ImgContainer>
                <InfoContainer>

                    <Title>summer deals</Title>
                    <Desc>dont compromise on style! get flat 20%off.</Desc>
                    <Button>shop now</Button>
                </InfoContainer>

</Slide>
 <Slide bg="f5fafd">
                
                <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"/>
                </ImgContainer>
                <InfoContainer>

                    <Title>summer deals</Title>
                    <Desc>dont compromise on style! get flat 20%off.</Desc>
                    <Button>shop now</Button>
                </InfoContainer>

</Slide>
<Slide bg="fcf1ed">
                
                <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"/>
                </ImgContainer>
                <InfoContainer>

                    <Title>summer deals</Title>
                    <Desc>dont compromise on style! get flat 20%off.</Desc>
                    <Button>shop now</Button>
                </InfoContainer>

</Slide>
            </Wrapper>

            <Arrow direction="right"onClick={()=>handleClick("right")}>
             <ArrowRightOutlined/>
            </Arrow>

        </Container>
    )
}

export default Slider

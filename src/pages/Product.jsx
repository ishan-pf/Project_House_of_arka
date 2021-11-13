import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons";


const Container=styled.div``

const Wrapper=styled.div`
padding: 50px;
display: flex;`

const ImgContainer=styled.div`
flex: 1;
`

const InfoContainer=styled.div`
flex:1;
padding:0px 50px;`

const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`

const Title=styled.h1`
font-weight: 200;`

const Desc=styled.p`
margin: 20px 0px ;`

const Price=styled.span`
font-weight: 100;
font-size: 40px;`

const FilterContainer=styled.div`
width: 30%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`


const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`


const Filter=styled.div`
display: flex;
align-items: center;
`

const AddContainer=styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between ;
`


const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;

`


const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content:center;
margin: 0px 5px;
`



const Button=styled.button`
padding: 15px;
border:2px solid teal;
background-color: #fff;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: grey;
}
`


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcements/>
            
                <Wrapper>
                    <ImgContainer>
                    <Image src="https://images.unsplash.com/photo-1612529328850-598a0e3a3e31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Oxidised small studs</Title>
                        <Desc>sijgkdvmdfjmv</Desc>
                        <Price>rs 200</Price>
                  
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Type</FilterTitle>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                                <Add/>
                                
                        </AmountContainer>
                        <Button>ADD tO CART</Button>
                    </AddContainer>
                    </InfoContainer>
                </Wrapper>
<Products/>
           <Newsletter/>
           <Footer/>
        </Container>
    )
}

export default Product

import { Email, EmailOutlined, Facebook, Instagram, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container=styled.div`
display: flex;
align-items: center;
justify-content: center;

`



const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

`
const Logo=styled.h1``

const Desc=styled.p`
margin: 20px 0px;
`

const SocialContainer=styled.div`
display: flex;
align-items: center;
`

const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`


const Center=styled.div`
flex: 1;
padding: 20px;
`

const Title=styled.h3`
margin-bottom: 30px;`

const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap:wrap ;
width: 30%;
`

const ListItem=styled.li`

margin-bottom: 10px;
list-style: none;


`



const Right=styled.div`
flex: 1;
padding: 20px;
`

const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment=styled.img`
width: 50%;
`


const Footer = () => {
    return (
        <Container>
<Left>

<Logo>House Of ARKA</Logo>
<Desc>A jewellery store</Desc>
<SocialContainer>
<SocialIcon color="3B5999">
    <Facebook/>
</SocialIcon>

<SocialIcon color="E4405F">
    <Instagram/>
</SocialIcon>

<SocialIcon color="55ACEE">
    <Twitter/>
</SocialIcon>
</SocialContainer>

</Left>




<Center>
<Title>
  Useful links  
</Title>
<List>

</List>
<ListItem>Home</ListItem>

<ListItem>Cart</ListItem>

<ListItem>Earrings</ListItem>

<ListItem>Rings</ListItem>

<ListItem>Necklaces</ListItem>

<ListItem>My Account</ListItem>

<ListItem>Order Tracking</ListItem>

<ListItem>Wishlist</ListItem>

<ListItem>Terms and conditions</ListItem>


</Center>
<Right>

    <Title>
       CONTACT 
    </Title>
    <ContactItem><Room style={{marginRight:"10px"}}/>
        xyz 4985. hhhh ttttt 9585
    </ContactItem>
    <ContactItem><Phone  style={{marginRight:"10px"}}/>
       56545486451
    </ContactItem>
    <ContactItem><EmailOutlined  style={{marginRight:"10px"}}/>
        contact@houseofarka.com
    </ContactItem>

    <Payment src=""/>
</Right>
        </Container>
    )
}

export default Footer

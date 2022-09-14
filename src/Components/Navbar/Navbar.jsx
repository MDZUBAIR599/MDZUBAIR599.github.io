import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'

export default function Navbar() {

    return (
        <Nav>
            <NavCont>
                <Logo onClick={()=> scroll.scrollToTop()}>MDZ</Logo>
                <Menu>
                    <Link to='projects' smooth={true} duration={1500}><Projects> Projects </Projects></Link>
                    <Link to='footer' smooth={true} duration={1500}><Contact> Contact </Contact></Link>
                    <Resume> <Link to=" " target="_blank" rel="noopener noreferrer">Resume</Link></Resume>
                </Menu>
            </NavCont>
        </Nav>
    )
}

const Nav = styled.div`
    z-index: 10;
    position: sticky;
    top: 0;
    padding:10px
    border:1px solid teal;
    //border-bottom: 1px solid gray;
    height: 3.5rem;
    
    backdrop-filter: saturate(150%) blur(50px);
    // background:#6b6b6b;
    @media (max-width: 768px) {
        height: 3.5rem;
    }
`
const NavCont = styled.div`
    padding: 0 2rem;
    color:#0f1108;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 5px 15px;
    }
`
const Logo = styled.div`
    font-family: 'Philosopher', sans-serif;
    font-size:3rem;
    cursor: pointer;
    color:#0f1108;
    @media (max-width: 768px) {
        font-size:2rem;
        line-height:2.8rem;
        }
    `
const Menu = styled.div`
    display: flex;
    font-size: 1.3rem;
    line-height: 3.5rem;
    justify-content: space-between;
    div{
        font-size: 1rem;
        position: relative;
        width: 5.6rem;
        padding: 0 1rem;
        margin: 0 2rem;
        cursor: pointer;
        @media (max-width: 768px) {
        padding: 0;
        margin: 0%;
        line-height: 2.8rem;
        }
        :hover{
            background: #e7ffed;
            transition: 0.4s;
        }
    }
    div:after{
        content: "";
        position: absolute;
        background-color: #80AB82;
        height: 3px;
        width: 0;
        left: 0;
        bottom: 0px;
        transition: 0.3s;
    }
    div:hover:after{
        width: 100%;
    }
`
const Projects = styled.div`
// font-width:40px;
@media (max-width: 500px) {
        display: none;
        }
`
const Contact = styled.div`
`
const Resume = styled.div`
    a{
        text-decoration: none;
        color:#0f1108;
    }
`
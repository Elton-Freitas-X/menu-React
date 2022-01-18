import React, {memo} from "react";
import logo from '../../assets/images/logo-riot.png'
import menu from '../../assets/images/menu.jpg'
import {
    HeaderStyled,
    LogoStyled,
    MenuContentStyled,
    MenuIconStyled,
    MenuStyled
} from './../../style'

function Header() {
    return(
        <HeaderStyled>
            <LogoStyled>
                <a>
                <img src={logo} alt='logo Marvel' width="50px" />
                </a>
            </LogoStyled>  
            
            <MenuContentStyled>
                <MenuIconStyled src={menu} width="24px"/>
            </MenuContentStyled>

            <MenuStyled>
                <li>
                    <a href="#personagens">Personagens</a>
                </li>
                <li>
                    <a href="#heroes">Livros</a>
                </li>
                <li>
                    <a href="#filmes">Filmes</a>
                </li>
                <li>
                    <a href="#games">Jogos</a>
                </li>
                <li>
                    <a href="#news">Notícias</a>
                </li>
            </MenuStyled>

        </HeaderStyled>
    )
}

export default memo(Header);
import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width:100%;
    background-color: ${( {theme }) => theme.primary};
    z-index: 9999;
    position: fixed;
    border-bottom: 1px solid #fff;
`

export const LogoStyled = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 40px;
`

export const MenuContentStyled = styled.div`
    position: absolute;
    z-index: 4;
    width: 100%;
    background-color: ${( {theme}) => theme.primary};
    overflow: hidden;
    display: none;
    height: 40px;
    padding: 0;
`
export const MenuIconStyled = styled.img`
    cursor: pointer;
`

export const MenuStyled = styled.ul`
    list-style: none;
    margin: 1rem;
    padding-left: 0 10%;
    overflow: hidden;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-around;

    li a {
        display: block;
        color: #fff;
        text-align: center;
        padding-left: 16px;
        outline: none;
        text-decoration: none;
    }
`


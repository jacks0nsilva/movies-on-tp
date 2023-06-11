import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    background: #2b2b31;
}

.animeBottom{
    transform: translateY(-10px);
    animation: bottom .5s forwards;
}

.btnPageSelector{
    margin-bottom: .9rem;
}

.btnPageSelector button{
    border: 1px solid rgba(255,255,255,0.1);
    color: #fff;
    border-radius: .4rem;
    background-color: #2b2b31;
    cursor: pointer;
    transition: .4s;
    padding: .7rem .9rem;
}

.btnPageSelector button:nth-child(n+2){
    margin-left: .5rem;
}

.btnPageSelector button:hover{
    border: 1px solid rgba(255, 255, 255, 0.404);
}

.btnPageSelector button:disabled{
    background: #5c5c68;
}

.embedResponsive{
    position: relative;
    display: block;
    width: 80%;
    padding: 0;
    overflow: hidden;
    margin-top: 2rem;
}

.embedResponsive iframe{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

.embedResponsive::before{
    padding-top: 56.25%;
    display: block;
    content: '';
    box-sizing: border-box;
}

@keyframes bottom{
    to{
        transform: initial;
        opacity: initial;
    }
}

@media(max-width: 600px){
     .embedResponsive{
        width: 100%;
    }

    .btnPageSelector button{
        padding: .5rem .7rem;
    }
}

`;

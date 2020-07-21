import styled from 'styled-components';

export const ContainerLanding = styled.div`
    position: relative;
    display: flex;
    height: 500px;
    width: 100%;
    text-align: center;
.ImageBackground {
    opacity: 0.4;
    position: absolute;
    height: 700px;
    width: 700px;
}
`;

export const Section = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 440px;
    margin: auto;
    padding: 85px;
    height: 300px;
    width: 300px;
    border: 3px solid #71aabb;
    text-align: center;
    align-items: center;
    box-shadow: 10px 10px 5px grey;
    background-color: white;
    opacity: 0.9;
    transition: width 2s, height 2s, transform 2s;
:hover {
    width: 350px;
    height: 350px;
}
a {
    text-decoration: none;
    color: inherit;
        

button {
    height: 30px;
    width: 200px;
    margin: 5px;
    opacity: 1;
    transition: width 2s, height 2s;
:hover {
    color: white;
    background-color: #48666f;
    width: 250px;
    height: 40px;    
}
}
}
`;


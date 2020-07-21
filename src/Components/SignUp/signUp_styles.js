import styled from "styled-components"

export const ContainerSignUp = styled.div`
  display: flex;
  height: 500px;
  width: 100%;

  .ImageBackground {
    opacity: 0.4;
    position: absolute;
    height: 700px;
    width: 700px;
  }
`
export const FormConteiner = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 40px;
  height: 400px;
  width: 400px;
  border: 3px solid #71aabb;
  text-align: center;
  color: #2c3439;
  align-items: center;
  box-shadow: 10px 10px 5px grey;
  background-color: white;
  opacity: 0.9;
  transition: width 2s, height 2s, transform 2s;
:hover {
    width: 450px;
    height: 450px;
}

> input {
  height: 30px;
  width: 250px;
  margin: 15px;
  border: 2px solid #48666f;
  transition: width 2s, height 2s;
:hover {
  width: 300px;
  height: 35px;
  border: 2px solid #71aabb;
}
}

> button {
  background-color: #d8e1e3;
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
`
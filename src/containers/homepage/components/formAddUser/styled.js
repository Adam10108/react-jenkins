import { Button } from 'antd'
import styled from '@emotion/styled'

export const StyledTitle = styled.div`
  height: 54px;
  margin-bottom: 15px;
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #d670a4,
    #da75a2,
    #de7aa2,
    #e27fa1,
    #e288b8,
    #dd94cf,
    #d5a0e4,
    #aabbff,
    #6ed5ff,
    #3cebff,
    #5ffbf1
  );

  color: white;
  font-size: 22px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledFooter = styled.div`
  padding: 10px 0px 0px 0px;
  margin: 5px 0px 0px 0px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const StyledButton = styled(Button)`
  font-size: 14px;
  font-weight: bold;
  color: white;

  width: 80px;
  height: 40px;
  border-radius: 2px;
  border-color: white;
  background-color: #d16ba5;
  padding: 5px;
  margin-right: 10px;

  &:hover {
    color: white;
    border-color: white;
    background-image: linear-gradient(
      to right top,
      #051937,
      #004d7a,
      #008793,
      #00bf72,
      #a8eb12
    );
  }

  &:focus {
    color: white;
    border-color: white;
    background-image: linear-gradient(
      to right top,
      #051937,
      #004d7a,
      #008793,
      #00bf72,
      #a8eb12
    );
  }
`
export const StyledText = styled.span`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 4px;
`

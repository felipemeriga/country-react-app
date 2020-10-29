import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Close from 'components/Common/Icons/Common/Close'
import {ICountryData} from '../../Main/Content/Tasks';
import Index from '../Flag';
import Description from './Description';

const variables = {
  colorGray: '#92929d',
  colorRed: '#fc5a5a',
  colorWhite: '#ffffff'
};

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(220%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(23, 23, 37, 0.4);
  z-index: 100;
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 30%;
  min-height: 30vh;
  background-color: ${variables.colorWhite};
  border-radius: 20px;
  padding: 20px 25px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${variables.colorGray};
  font-size: 14px;
  height: 50px;
  border-bottom: 1px solid #e2e2ea;
`;
const Button = styled.button`
  background-color: ${variables.colorWhite};
  border: none;
  outline: none;
  cursor: pointer;
  svg {
    fill: ${variables.colorGray};
    :hover {
      fill: #0062ff;
    }
  }
`;
const Title = styled.div`
  color: #171725;
  font-size: 24px;
  margin: 30px 0;
`;

const FlagWrapper = styled(Index)`
  margin-bottom: 5vh;
`;

interface ITaskModalProps {
  country: ICountryData
  onClose: () => void
}

const TaskModal: React.FC<ITaskModalProps> = props => {
  const { country, onClose} = props;

  const element = document.getElementById('modal');

  return ReactDOM.createPortal(
    <Wrapper>
      <Modal>
        <Header>
          <span>{country.region}</span>
          <Button onClick={onClose}>
            <Close />
          </Button>
        </Header>
        <Title>
          <span>{country.name}</span>
        </Title>
        <FlagWrapper url={country.flag}/>
        <Description country={country}/>
      </Modal>
    </Wrapper>,
      // @ts-ignore
    element
  )
};

export default TaskModal

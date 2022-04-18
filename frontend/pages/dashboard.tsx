import { Header } from '@/components/Header';
import { Container } from '@/components/_layouts/Container';
import { NextPage } from 'next';
import styled from 'styled-components';

const Dashboard: NextPage = () => (
  <Wrapper>
    <Header />

    <StyledContainer>dashboard</StyledContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.greyLight};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledContainer = styled(Container)`
  flex: 1;
`;

export default Dashboard;

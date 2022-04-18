import { Header } from '@/components/_layouts/Header';
import { Container } from '@/components/_layouts/Container';
import { NextPage } from 'next';
import styled from 'styled-components';
import { User } from '@/components/User';

const Dashboard: NextPage = () => (
  <Wrapper>
    <Header />

    <StyledContainer>
      <User />
    </StyledContainer>
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

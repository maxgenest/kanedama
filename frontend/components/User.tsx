import React from 'react';
import { useSwrUser } from 'services/userServices';
import styled from 'styled-components';

export const User: React.FC = () => {
  const { user, userLoading, userError } = useSwrUser();

  if (userLoading) {
    return <div>loading</div>;
  }
  if (userError) {
    return <div>error: {userError}</div>;
  }

  return (
    <Wrapper>
      <Initials>
        {user.name.last.split('')[0]}
        {user.name.first.split('')[0]}
      </Initials>
      <FullName>
        <LastName>{user.name.last}</LastName>{' '}
        <FirstName>{user.name.first}</FirstName>
      </FullName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Initials = styled.div`
  width: ${({ theme }) => theme.spacings.ml};
  height: ${({ theme }) => theme.spacings.ml};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacings.ms};
`;
const FullName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.greyDark};
`;
const LastName = styled.span`
  text-transform: uppercase;
`;
const FirstName = styled.span`
  text-transform: capitalize;
`;

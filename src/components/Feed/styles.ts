import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  width: 100%;
  padding: 11px 0 15px;
  text-align: center;
  font-weight: bold;

  color: var(--twitter);
  outline: 0;
  cursor: pointer;

  border-bottom: 2px solid var(--twitter);

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;

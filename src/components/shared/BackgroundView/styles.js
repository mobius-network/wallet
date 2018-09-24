import styled from 'styled-components';

const variants = {
  center: {
    content: {
      justifyContent: 'center',
      paddingBottom: 0,
    },
  },
  bottom: {
    content: {
      justifyContent: 'flex-end',
      paddingBottom: 50,
    },
  },
};

export const Container = styled.ImageBackground`
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding-left: 24;
  padding-right: 24;
  padding-bottom: 16;
`;

export const Content = styled.View`
  flex: 1;
  align-items: stretch;
  flex-direction: column;
  justify-content: ${({ theme }) => variants[theme.variant].content.justifyContent};
  padding-bottom: ${({ theme }) => variants[theme.variant].content.paddingBottom};
`;

export const Action = styled.View`
  width: 100%;
`;

export const SecondaryAction = styled.View`
  margin-top: 16;
  width: 100%;
`;

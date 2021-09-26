import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.heading};
`;

export const Description = styled.Text`
  margin: 16px 0;
  font-size: 14px;
  color: ${colors.body};
`;

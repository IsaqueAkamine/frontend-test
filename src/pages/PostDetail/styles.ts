import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ImageHeader = styled.Image`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: ${Dimensions.get("window").width}px;
  height: 250px;
`;

export const ScrollContent = styled.ScrollView``;

export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;

export const Description = styled.Text`
  margin: 16px 0;
  font-size: 14px;
  color: ${colors.body};
  font-family: ${fonts.text};
`;

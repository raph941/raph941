import { FC } from "react";
import styled from "styled-components";
import {
  StyledBodyText,
  StyledH1,
  StyledH4,
} from "../components/StyledElements";
import { ThemeType } from "../styles/theme";
import RaphaelAvatar from '../assets/images/RaphaelAvatar.png'

interface HeroProps {
  title: string;
  name: string;
  bio: string;
  imgSrc: string;
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  height: 100vh;
  .hero-avatar > img {
    height: 350px;
  }

  .img-frame {
    Height: 400px;
    width: 400px;
    border: 20px solid ${({ theme }) => theme.variableslight};
    border-radius: 50%;
    background: url(${RaphaelAvatar});
    background-size: cover;
  }

  .items-wrap {
    margin: 5% 10%;
  }

  .img-frame {
    box-shadow: 0px 2px 21px -2px rgba(0,0,0,0.75);
  }

  @media ${props => props.theme.mediaQueries.mobile} {
    .img-frame {
      height: 250px;
      width: 250px;
    }
  }
`;

const Home: FC<HeroProps> = ({ bio, imgSrc, name, title }) => (
  <StyledWrapper className="d-flex justify-content-center align-items-center px-sm-5 page-content pt-5 pt-sm-0">
    <div className="d-flex gap-5 flex-wrap flex-sm-nowrap items-wrap">
      <div className="hero-avatar d-flex justify-content-center align-items-center flex-grow-1">
        <div className="img-frame"/>
      </div>
      <div className="d-flex flex-column justify-content-center flex-grow-1">
        <StyledH4 className="text-muted">{title}</StyledH4>
        <StyledH1>{name}</StyledH1>
        <StyledBodyText>{bio}</StyledBodyText>
      </div>
    </div>
  </StyledWrapper>
);

export { Home };

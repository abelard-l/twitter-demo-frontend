import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BlueLink from "../../UI/BlueLink";
import iconPhotosVideos from "./icon-photos-videos.svg";
import photosVideos1 from "./photos-videos-1.jpg";
import photosVideos2 from "./photos-videos-2.jpg";
import photosVideos3 from "./photos-videos-3.jpg";
import photosVideos4 from "./photos-videos-4.jpg";
import photosVideos5 from "./photos-videos-5.jpg";
import photosVideos6 from "./photos-videos-6.jpg";

const UserPhotosAndVideos = styled.div``;

const Title = styled.div`
  display: flex;
  aling-items: center;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  margin-right: 12px;
`;

const PhotosVideos = styled.div``;

const PhotosVideosLink = styled(Link)`
  margin-right: 5px;
`;

const PhotosVideosImg = styled.img``;

const PhotoVideo = ({ to, image }) => (
  <PhotosVideosLink to={to}>
    <PhotosVideosImg src={image} />
  </PhotosVideosLink>
);

export default () => (
  <UserPhotosAndVideos>
    <Title>
      <Icon src={iconPhotosVideos} />
      <BlueLink to={"/EveryInteract/media/"}>522 Photos and videos</BlueLink>
    </Title>
    <PhotosVideos>
      <PhotoVideo to="/EveryInteract/photos/111" image={photosVideos1} />
      <PhotoVideo to="/EveryInteract/photos/112" image={photosVideos2} />
      <PhotoVideo to="/EveryInteract/photos/113" image={photosVideos3} />
      <PhotoVideo to="/EveryInteract/photos/114" image={photosVideos4} />
      <PhotoVideo to="/EveryInteract/photos/115" image={photosVideos5} />
      <PhotoVideo to="/EveryInteract/photos/116" image={photosVideos6} />
    </PhotosVideos>
  </UserPhotosAndVideos>
);

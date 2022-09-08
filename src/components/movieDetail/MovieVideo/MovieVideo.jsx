import React from 'react';
import YouTube from 'react-youtube';
import * as Styled from '@/components/movieDetail/MovieVideo/MovieVideo.styled';

const videoOptions = {
  height: '400',
  width: '1050',
  playerVars: {
    autoplay: 1,
    controls: 0,
    rel: 0,
    showinfo: 0,
    mute: 1,
    loop: 1,
  },
};

const MovieVideo = ({ movieDetail }) => {
  const youtubeApiKey = movieDetail.video.key;

  return (
    <Styled.MovieVideoBox>
      <YouTube videoId={youtubeApiKey} opts={videoOptions} />
      <Styled.TagLine>{movieDetail.tagline}</Styled.TagLine>
    </Styled.MovieVideoBox>
  );
};

export default MovieVideo;
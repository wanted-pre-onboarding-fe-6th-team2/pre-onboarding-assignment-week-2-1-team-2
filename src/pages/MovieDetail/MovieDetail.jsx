import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '@/components/movieDetail/MovieInfo/MovieInfo';
import MovieOverview from '@/components/movieDetail/MovieOverview/MovieOverview';
import ProductionCompany from '@/components/movieDetail/ProcutionCompany/ProductionCompany';
import movieApiService from '@/api/movieService';
import MovieVideo from '@/components/movieDetail/MovieVideo/MovieVideo';
import PageContainer from '@/components/common/PageContainer/PageContainer';

const initailMovieDetail = {
  title: '',
  originalTitle: '',
  releaseDate: '',
  posterPath: '',
  overview: '',
  runtime: 0,
  voteAverage: 0,
  voteCount: 0,
  genres: [],
  productionCountries: [],
  productionCompanies: [],
  video: [],
  tagline: '',
};

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(initailMovieDetail);

  useEffect(() => {
    const getMovieDetail = async () => {
      const movieDetailData = await movieApiService.getMovieDetail({ movieId });
      const movieVideoData = await movieApiService.getMovieVideos({ movieId });

      setMovieDetail({
        title: movieDetailData.title,
        originalTitle: movieDetailData.original_title,
        releaseDate: movieDetailData.release_date,
        posterPath: movieDetailData.poster_path,
        overview: movieDetailData.overview,
        tagline: movieDetailData.tagline,
        runtime: movieDetailData.runtime,
        voteAverage: movieDetailData.vote_average,
        voteCount: movieDetailData.vote_count,
        genres: movieDetailData.genres,
        productionCompanies: movieDetailData.production_companies,
        productionCountries: movieDetailData.production_countries,
        video: movieVideoData?.results[0],
      });
    };
    getMovieDetail();
  }, [movieId]);

  return (
    <PageContainer>
      <MovieVideo movieDetail={movieDetail} />
      <MovieInfo movieDetail={movieDetail} />
      <MovieOverview movieDetail={movieDetail} />
      <ProductionCompany movieDetail={movieDetail} />
    </PageContainer>
  );
};

export default MovieDetail;

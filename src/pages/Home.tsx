import React from 'react';
import MainHome from '../components/Home/MainHome';
import MainPosts from '../components/Home/MainPosts';

function Home({ filterText }: { filterText?: string }) {
  return (
    <>
      <MainHome />
      <MainPosts filterText={filterText ?? ''} />
    </>

  );
}

export default Home;

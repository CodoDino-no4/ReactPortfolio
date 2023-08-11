import React from 'react';
import { CardItem } from '../../components/CardItem/CardItem';
import './Blog.scss';

export const Blog = (): JSX.Element => {
  return (
    <>
      <section className="blog">
        <h1>BLOG</h1>
        <div className="cards-items">
          <CardItem />
        </div>
        <div className="cards-items">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </section>
    </>
  );
};

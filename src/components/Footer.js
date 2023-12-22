import React from 'react';
import Title from './Title';
import { tour } from '../data';

const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />
        <div className="section-center featured-center">
          {tour.map(({ id, image, date, title, info, location, duration, cost }) => (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
            <footer></footer>

    </div>
  );
};

export default Tours;

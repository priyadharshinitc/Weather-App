import React from 'react';
import searchCity from '../assets/message/searchCity.svg';

const SearchCity = () => {
  return (
    <>
        <section className={`search-city section-message flex flex-col items-center gap-3 text-center mt-1/4`}>
          <img src={searchCity} className="message-img h-[180px] w-fit" />
          <h1>Search City</h1>
          <h4 className="regular-txt">Find out the weather conditions of the city</h4>
        </section>
    </>
  );
}

export default SearchCity;
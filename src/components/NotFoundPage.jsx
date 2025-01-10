import React from 'react';

import notFound from '../assets/message/notFound.svg';

const NotFoundPage = () => {  
  return (
    <>
        <section className={`not-found section-message flex flex-col items-center gap-3 text-center mt-1/4`}>
          <img src={notFound} className="message-img h-[180px] w-fit" />
          <h1>Page not found</h1>
          <h4 className="regular-txt">City not found. Make sure to enter a valid city name.</h4>
        </section>
    </>
  )
}

export default NotFoundPage;
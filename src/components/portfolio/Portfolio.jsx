import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolioo.jpeg";
import IMG2 from "../../assets/portfolioo.jpeg";
import IMG3 from "../../assets/portfolioo.jpeg";
import IMG4 from "../../assets/portfolioo.jpeg";
import IMG5 from "../../assets/portfoliooo.png";
import IMG6 from "../../assets/portfolioooo.jpeg";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>
            Direct cross-chain swapping without order books, deposits, or coin
            wrapping. High Yield Annual Interest for RGP token holders and
            Liquidity Providers with other products.
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://www.rigelprotocol.com/'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Rigel Protocol
            </a>
            <a
              href=' https://smartswap.rigelprotocol.com/#/swap'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Project
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>
            The Rigel Protocol Launchpad Platform helps innovative DeFi Projects
            to succeed in the highly competitive Blockchain industry and fund
            their development needs. At the same time, participating projects
            have access to the wide platform community and full support from the
            Rigel Protocol team
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://www.rigelprotocol.com/'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Rigel Protocol
            </a>
            <a
              href='https://launchpad.rigelprotocol.com/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Project
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>
            The Gift DApp is fabricated by Rigel Protocol and it comes with
            extremely good features. The gifting system permits influencers and
            projects to gift/reward their fans/community in crypto.
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://www.rigelprotocol.com/'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Rigel Protocol
            </a>
            <a
              href='https://giftdapp.rigelprotocol.com/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Project
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>
            Auto invest in any cryptocurrency of your choice. Buy a certain
            crypto with a predefined amount every week or month also you can set
            price features in order to minimize losses during bearish periods
            and take advantage of the market during bullish periods, set
            automation conditions to initiate swap when conditions are met
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://www.rigelprotocol.com/'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Rigel Protocol
            </a>
            <a
              href='https://smartswap.rigelprotocol.com/#/auto-period '
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Project
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>
            BSC Games promised to be a GameFi project on the Binance Smart
            Chain. The primary aim of BSC Games is to turn gaming from just a
            leisure activity to a cash cow by merging gaming{" "}
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://casino.bscgames.win/'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              BSC Games
            </a>
            <a
              href='https://casino.bscgames.win/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Project
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>
            An Individual Retirement Account designed specifically for
            Decentralized Exchanges. Where rewards are an auto claimed in
            different currency and Audit.{" "}
          </h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://www.dexfinance.com/dexira/'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Dexira
            </a>
            <a
              href='https://www.dexfinance.com/dexira/'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Live Project
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

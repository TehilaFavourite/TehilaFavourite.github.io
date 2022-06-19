import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/ajaye-favour-blockchain-developer'
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/TehilaFavourite' target='_blank'>
        <BsGithub />
      </a>
      <a href='https://twitter.com/teheelaa' target='_blank'>
        <BsTwitter />
      </a>
      <a href='https://favoriteblockchain.medium.com/' target='_blank'>
        <BsMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;

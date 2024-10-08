import React from 'react';
import style from '../styles/Rules.module.css';

const Rules = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('0xb01d852Ad6F84a7E2065aFEC5D0e801DE0bFa0B9').then(function() {
      alert('Copied the text: 0xb01d852Ad6F84a7E2065aFEC5D0e801DE0bFa0B9');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        How To Play
      </div>
      <div className={style.rule}>
        Enter the game with 0.1 BNB, you can enter multiple times! The winner gets all the BNB!
      </div>
      <div className={style.rule}>
        Wait for the random winner pick everyday at 1 PM UTC!
      </div>
      <div className={style.rule}>
        For the winner there is a 5% tax that will be used for buyback!
      </div>
      <div className={style.rule}>
        To play the game if you are on mobile, you need to open the website from the internal browser of MetaMask, then you will be able to connect the wallet. Remember to be on BSC chain to connect!
      </div>
      
      <div className={style.rule}>
        CA: <button onClick={copyToClipboard}>0xb01d852Ad6F84a7E2065aFEC5D0e801DE0bFa0B9</button>
      </div>
      <div className={style.rule}>
        Built with 💙 by <a href="https://twitter.com/Web3Kemal" target="_blank" rel="noopener noreferrer">@Web3Kemal</a>
      </div>
    </div>
  );
}

export default Rules;

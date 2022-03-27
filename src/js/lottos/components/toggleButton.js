import { toggleLottoPaidCardsLayout } from './lottoCards';
import { $ } from '../../utils/dom';

const $lottoNumberToggleButton = $('.lotto-numbers-toggle-button');

const toggleButtonEventListener = () => {
  $lottoNumberToggleButton.addEventListener('change', toggleLottoPaidCards);
};

const toggleLottoPaidCards = () => {
  toggleLottoPaidCardsLayout();
  toggleLottoCardsNumbers();
};

const toggleLottoCardsNumbers = () => {
  const $lottoPaidCardNumbers = $('.lotto-paid-card-numbers', 'all');

  $lottoPaidCardNumbers.forEach((elm) => elm.classList.toggle('d-none'));
};

export default toggleButtonEventListener;

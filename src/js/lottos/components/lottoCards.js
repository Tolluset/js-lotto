import { $ } from '../../utils/dom';

const $lottoPaidCards = $('.lotto-paid-cards');

const renderLottoCards = (lottos) => {
  resetLottoCardsLayout();
  $lottoPaidCards.insertAdjacentHTML('beforeEnd', lottosTagSTring(lottos));
};

const resetLottoCardsLayout = () => {
  $lottoPaidCards.replaceChildren();
  $lottoPaidCards.classList.remove('flex-col');
  $lottoPaidCards.classList.add('flex-row');
};

const lottosTagSTring = (lottos) => {
  return lottos.reduce((prv, cur) => {
    return prv + lottoCardsTemplate(cur);
  }, '');
};

const lottoCardsTemplate = (
  lotto,
) => `<div class="lotto-paid-card d-flex items-center mx-1 text-4xl" data-target="lotto-paid-card">
        <div>🎟️</div> 
        <span class="lotto-paid-card-numbers d-none text-xl ml-3" data-target="lotto-paid-card-numbers">${lotto.join()}</span>
      </div>`;

export const toggleLottoPaidCardsLayout = () => {
  $lottoPaidCards.classList.toggle('flex-col');
  $lottoPaidCards.classList.toggle('flex-row');
};

export default renderLottoCards;

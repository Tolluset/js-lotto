import renderLottoCards from './lottoCards';

import payLotto from '../model/pay';
import { $ } from '../../utils/dom';

const $lottoPayForm = $('.lotto-pay-form');
const $lottoPayInput = $lottoPayForm.querySelector('input');

const $lottoPaidSection = $('.lotto-paid-section');
const $lottoPaidCounts = $('.lotto-paid-counts');
const $lottoPaidSwitch = $('.lotto-paid-switch');
const $lottoPaidCheckBox = $lottoPaidSwitch.querySelector('input');

const $lottoCheckForm = $('.lotto-check-form');

const payFormEventListener = () => {
  $lottoPayForm.addEventListener('submit', submitLottoPay);
};

const submitLottoPay = (e) => {
  e.preventDefault();
  const lottos = payLotto($lottoPayInput.value);

  if (lottos === undefined) $lottoPayForm.reset();
  else renderPaidResultSections(lottos);
};

const renderPaidResultSections = (lottos) => {
  $lottoPaidCounts.innerHTML = lottos.length;

  resetPaidSection();
  showLottoResultSections();
  renderLottoCards(lottos);
};

const resetPaidSection = () => {
  $lottoPaidCheckBox.checked = false;
};

const showLottoResultSections = () => {
  $lottoPaidSection.classList.remove('d-none');
  $lottoCheckForm.classList.remove('d-none');
};

export default payFormEventListener;

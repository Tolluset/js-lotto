import { $ } from '../../utils/dom';

const $showResultButton = $('.open-result-modal-button');
const $modal = $('.modal');

const checkResultButtonEventListener = () => {
  $showResultButton.addEventListener('click', onModalShow);
};

const onModalShow = () => {
  $modal.classList.add('open');
};

export default checkResultButtonEventListener;

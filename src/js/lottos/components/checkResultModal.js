import { $ } from '../../utils/dom';

const $modalClose = $('.modal-close');
const $modal = $('.modal');

const checkResultModalEventListener = () => {
  $modalClose.addEventListener('click', onModalClose);
};

const onModalClose = () => {
  $modal.classList.remove('open');
};

export default checkResultModalEventListener;

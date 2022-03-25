before(() => cy.visit('../../dist/index.html'));

afterEach(() => {
  cy.reload();
});

// TODO: The context's each functions are not settled and named, so should change it.
describe('결과 확인하기 버튼을 누르면 당첨 통계, 수익률을 모달로 확인할 수 있다.', () => {
  context('결과 확인하기 버튼을 누르면 결과 확인 모달이 보인다.', () => {
    const checkPriecAndPaidCounts = (price) => {};

    it('1000원', () => {
      checkPriecAndPaidCounts(1000);
    });

    it('2000원', () => {
      checkPriecAndPaidCounts(2000);
    });

    it('10000원', () => {
      checkPriecAndPaidCounts(10000);
    });
  });

  context('결과를 엔터를 입력하여 확인 할 수 있다.', () => {
    const checkPriecAndPaidCounts = (price) => {};

    it('1000원', () => {
      checkPriecAndPaidCounts(1000);
    });

    it('2000원', () => {
      checkPriecAndPaidCounts(2000);
    });

    it('10000원', () => {
      checkPriecAndPaidCounts(10000);
    });
  });

  context('중복된 번호를 입력하는 경우 사용자에게 알럿을 띄운다.', () => {
    const checkPriecAndPaidCounts = (price) => {};

    it('1000원', () => {
      checkPriecAndPaidCounts(1000);
    });

    it('2000원', () => {
      checkPriecAndPaidCounts(2000);
    });

    it('10000원', () => {
      checkPriecAndPaidCounts(10000);
    });
  });

  context('모달에서 수익률을 확인할 수 있다.', () => {
    const checkPriecAndPaidCounts = (price) => {};

    it('1000원', () => {
      checkPriecAndPaidCounts(1000);
    });

    it('2000원', () => {
      checkPriecAndPaidCounts(2000);
    });

    it('10000원', () => {
      checkPriecAndPaidCounts(10000);
    });
  });

  context('모달에서 당첨 통계를 확인할 수 있다.', () => {
    const checkPriecAndPaidCounts = (price) => {};

    it('1000원', () => {
      checkPriecAndPaidCounts(1000);
    });

    it('2000원', () => {
      checkPriecAndPaidCounts(2000);
    });

    it('10000원', () => {
      checkPriecAndPaidCounts(10000);
    });
  });

  context('모달을 닫을 수 있다.', () => {
    const checkPriecAndPaidCounts = (price) => {};

    it('1000원', () => {
      checkPriecAndPaidCounts(1000);
    });

    it('2000원', () => {
      checkPriecAndPaidCounts(2000);
    });

    it('10000원', () => {
      checkPriecAndPaidCounts(10000);
    });
  });
});

describe('로또 당첨 금액은 고정되어 있는 것으로 가정한다.', () => {
  context('모달에서 보이는 로또 당첨금이 지정해둔 금액과 동일하다.', () => {
    const checkPriecAndPaidSectionVisible = (price) => {};

    it('1000원', () => {
      checkPriecAndPaidSectionVisible(1000);
    });

    it('2000원', () => {
      checkPriecAndPaidSectionVisible(2000);
    });

    it('10000원', () => {
      checkPriecAndPaidSectionVisible(10000);
    });
  });

  context('모달에서 보이는 로또 일치 갯수가 지정해둔 갯수와 동일하다.', () => {
    const checkAlertAndClear = (price) => {};

    it('1200원', () => {
      checkAlertAndClear(1200);
    });

    it('-100원', () => {
      checkAlertAndClear(-100);
    });

    it('0원', () => {
      checkAlertAndClear(0);
    });
  });
});

describe('다시 시작하기 버튼을 누르면 초기화 되서 다시 구매를 시작할 수 있다.', () => {
  context(
    '이전 결과가 초기화 되고 구입 금액 입력하는 곳으로 키보드 커서가 이동한다.',
    () => {
      const checkLottoValidated = (price) => {};

      it('1000원', () => {
        checkLottoValidated(1000);
      });

      it('2000원', () => {
        checkLottoValidated(2000);
      });

      it('10000원', () => {
        checkLottoValidated(10000);
      });
    },
  );
});

import './index.scss';

const ready = (): void => {

  interface IPriceParameters {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number
  };

  const totalPrice = ({ price, discount, isInstallment, months }: IPriceParameters): number => {
    // Your code here...
    const total_price: number = price - (price * discount / 100);
    return isInstallment ? total_price/months : total_price
  };

  const price = 100000;
  const discount = 25;
  const months = 12;

  const installment_on = totalPrice({ price: price, discount: discount, isInstallment: true, months: months });
  const installment_off = totalPrice({ price: price, discount: discount, isInstallment: false, months: months });

  console.log('installment_on', installment_on);
  console.log('installment_off', installment_off);
}

document.addEventListener("DOMContentLoaded", ready);

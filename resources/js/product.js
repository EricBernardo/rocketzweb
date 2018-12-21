import SimpleMaskMoney from 'simple-mask-money';

window.SimpleMaskMoney = SimpleMaskMoney;

const args = {
    allowNegative: false,
    negativeSignAfter: false,
    prefix: '',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'move'
};

const input = SimpleMaskMoney.setMask('[name="discount"], [name="price"]', args);

input.formatToNumber();
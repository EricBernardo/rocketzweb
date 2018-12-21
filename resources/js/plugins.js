import Inputmask from 'inputmask';

window.Inputmask = Inputmask;

Inputmask('99.999.999/9999-99', {"placeholder": ""}).mask($('[name="cnpj"]'));

Inputmask('(99) 9999-99999', {"placeholder": ""}).mask($('[name="phone"]'));

Inputmask('99999-999', {"placeholder": ""}).mask($('[name="cep"]'));

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

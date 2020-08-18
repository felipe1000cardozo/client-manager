const monthOfYear = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const getFullDate = (date) => {
  return `${date.getDate()} de ${
    monthOfYear[date.getMonth()]
  } de ${date.getFullYear()} ás ${date.getHours()}:${date.getMinutes()}`;
};

export default getFullDate;

const numberWithCommas = (x: any) => {
  let amount = x.toString()?.split('.');

  if (amount?.[1]) {
    return (
      amount?.[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
      '.' +
      amount?.[1]
    );
  } else {
    return amount?.[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

export {numberWithCommas};

/* eslint-disable consistent-return */
export const hasNumbers = value => {
  return new RegExp(/[0-9]/).test(value);
};

export const hasSpecial = value => {
  return new RegExp(/[!@#$%^&*)(+=._-]/).test(value);
};

export const hasDown = value => {
  return new RegExp(/[a-z]/).test(value);
};

export const hasUpper = value => {
  return new RegExp(/[A-Z]/).test(value);
};

export const strengthColor = count => {
  if (count === 1) {
    return 'transparent';
  }
  if (count < 3) {
    return 'red';
  }
  if (count < 4) {
    return 'yellow';
  }
  if (count < 5) {
    return 'green';
  }
};

export const strengthIndicator = value => {
  const matched = [];
  // if (value.lentgh > 5) matched.push('greater-than-5');
  // if (value.lentgh > 7) matched.push('greater-than-7');
  if (hasNumbers(value)) matched.push('has-numbers');
  if (hasDown(value)) matched.push('has-down');
  if (hasUpper(value)) matched.push('has-upper');
  if (hasSpecial(value)) matched.push('has-special');
  matched.push(value);

  return matched.length;
};

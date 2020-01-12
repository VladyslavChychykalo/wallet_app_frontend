const hasNumbers = value => {
  return new RegExp(/[0-9]/).test(value);
};

const hasSpecial = value => {
  return new RegExp(/[!@#$%^&*)(+=._-]/).test(value);
};

const hasDown = value => {
  return new RegExp(/[a-z]/).test(value);
};

const hasUpper = value => {
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
    return 'orange';
  }
  if (count <= 5) {
    return 'green';
  }

  return 'transparent';
};

export const strengthIndicator = value => {
  const matched = [];
  if (hasNumbers(value)) matched.push('has-numbers');
  if (hasDown(value)) matched.push('has-down');
  if (hasUpper(value)) matched.push('has-upper');
  if (hasSpecial(value)) matched.push('has-special');
  matched.push(value);

  return matched.length;
};

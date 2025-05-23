export const InputComponent = {
  render: (props = {}) => {
    return `
        <input type="${props.type || 'text'}" placeholder="${props.placeholder || ''}" class="inputComponent">
    `;
  }
};

export const checkBoxComponent = {
  render: (props = {}) => {
    return `
        <input type="${props.type || 'checkbox'}" class="checkBoxComponent">
    `;
  }
};

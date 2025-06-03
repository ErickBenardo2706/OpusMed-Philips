export const InputComponent = {
  render: (props = {}) => {
    return `
        <input id="${props.id}" type="${props.type || 'text'}" placeholder="${props.placeholder || ''}"  ${props.disabled?"disabled" : ''} class="inputComponent">
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

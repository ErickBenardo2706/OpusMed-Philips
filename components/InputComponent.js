export const InputComponent = {
  render: (props = {}) => {
    return `
        <input type="${props.type || 'text'}" placeholder="${props.placeholder || ''}" class="inputComponent">
    `;
  }
};
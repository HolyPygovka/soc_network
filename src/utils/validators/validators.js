export const required = value => (value || typeof value === 'number' ? undefined : 'Required')


export const maxLengthCreator = (maxLength) => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;

    return undefined
}


export function createError(): never {
    throw new Error('Any error')
}

createError()

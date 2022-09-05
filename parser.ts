import { Token, TokenTypes } from './tokenizer'

export function parser(tokens: Token[]) {
  let current = 0
  let token = tokens[current]

  if (token.type === TokenTypes.Number) {

  }
  return {
    tyoe: 'Program',

  }
}
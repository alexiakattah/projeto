const token = 'rtf8c26a-e90d-47af-b16f-678a9f45d907'

export function buscarProfissionais() {
  return fetch('http://api.smileb.com.br/api/TesteDesenvolvimento/DadosRecebidos', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'token': token,
    },
  }).then((response) => response.json())
}

export function buscarDadosMapa() {
  return fetch('http://api.smileb.com.br/api/TesteDesenvolvimento/DadosMapa', {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'token': token,
    },
  }).then((response) => response.json())
}

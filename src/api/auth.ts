import api from './axios'

const getRequestToken = async (): Promise<string> => {
  const response = await api.get('/authentication/token/new')
  return response.data.request_token
}

const validateLogin = async (
  username: string,
  password: string,
  requestToken: string,
): Promise<string> => {
  const response = await api.post('/authentication/token/validate_with_login', {
    username,
    password,
    request_token: requestToken,
  })
  return response.data.request_token
}

const createSession = async (requestToken: string): Promise<string> => {
  const response = await api.post('/authentication/session/new', {
    request_token: requestToken,
  })
  return response.data.session_id
}

export const authenticateUser = async (username: string, password: string): Promise<string> => {
  try {
    const requestToken = await getRequestToken()
    const validatedToken = await validateLogin(username, password, requestToken)
    const sessionId = await createSession(validatedToken)
    localStorage.setItem('session_id', sessionId)
    return sessionId
  } catch (error) {
    console.error('Authentication failed:', error)
    throw error
  }
}

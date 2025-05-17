const API_URL = '/api/auth';

const login = async (credentials) => {
  const res = await fetch(\`\${API_URL}/login\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error('Login fehlgeschlagen');

  const data = await res.json();
  return data.token;
};

export default { login };

class Auth {
    url = 'http://127.0.0.1:8000/auth';
    data = '';
    isValidated = '';

    async getResource(url, header) {
        const rs = await fetch(`${this.url}${url}`, header);
        if(!rs.ok) {
            throw new Error(`Не получилось получить доступ к ${url}. ${rs.status}`)
        }
        return await rs.json();
    }
    async login(username, password) {
        const response = await fetch(`${this.url}/token/login`, {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
              },
        });
        const responseJSON = await response.json();
        return await responseJSON.auth_token;

    }
    buildHeader(method='GET', token='') {
        return  {
            method,
            headers: {
                'Authorization': `Token ${token}`,

            }
        }
    }
    async checkTokenAndGetData(token) {
        const header = await this.buildHeader('GET', token);
        const tst = await this.getResource('/users/me',  header);
        return await tst
    }
}
export default Auth;
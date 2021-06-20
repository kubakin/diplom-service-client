class Service {
    url = 'http://127.0.0.1:8000/apiv2';
    async getResource(url, header) {
        const rs = await fetch(`${this.url}${url}`, header);
        if (!rs.ok) {
            console.log(`Не получилось получить доступ к ${url}. ${rs.status}`)
        }
        return await rs.json();
    }
    buildHeader(method = 'GET', data = '', token='') {
        
        if (method === 'GET') {
            return {
                method,
                // headers: {
                //     'Authorization': `Token ${token}`,

                // }
            }
        }
        console.log(token)
        return {
            method,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    }
    async postOrder(tarif_id, site_id, token='') {
        const tariff = {"tariff": tarif_id};
        const header = await this.buildHeader('POST', tariff, token);
        const rs = await this.getResource(`/site/${site_id}/gettariff/`, header);
        return await rs
    }
    async postBalance(token) {
        const header = await this.buildHeader('POST',false, token);
        const rs = await this.getResource(`/profile/topup/topup/`, header);
        return await rs
    }
    async getCharts(site) {
        const header = await this.buildHeader('GET');
        const rs = await this.getResource(`/report/?site=${site}`, header);
        return await rs
    }
    async getReports(id) {
        const header = await this.buildHeader('GET');
        const rs = await this.getResource(`/site/${id}/report`, header);
        return await rs;
    }
    async getTariff(id = '') {
        const header = await this.buildHeader('GET');
        const rs = await this.getResource(`/tariff/${id}`, header);
        return await rs;
    }
    async getByUrl(url) {
        const header = await this.buildHeader('GET');
        const rs = await this.getResource(url, header);
        return await rs;
    }
}
export default Service;


// class Some {
//     url = 'http://127.0.0.1:8000/apiv2';
//     token='';
//     async getResource(url, header) {
//         const rs = await fetch(`${this.url}${url}`, header);
//         if (!rs.ok) {
//             console.log(`Не получилось получить доступ к ${url}. ${rs.status}`)
//         }
//         return await rs.json();
//     }
//     buildHeader(method = 'GET', data = '') {
        
//         if (method === 'GET') {
//             return {
//                 method,
//                 // headers: {
//                 //     'Authorization': `Token ${token}`,

//                 // }
//             }
//         }
//         console.log(this.token)
//         return {
//             method,
//             headers: {
//                 'Authorization': `Token ${this.token}`,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         }
//     }
//     async postOrder(tarif_id, site_id) {
//         const tariff = {"tariff": tarif_id};
//         const header = await this.buildHeader('POST', tariff);
//         const rs = await this.getResource(`/site/${site_id}/gettariff/`, header);
//         return await rs
//     }
//     async getCharts(site) {
//         const header = await this.buildHeader('GET');
//         const rs = await this.getResource(`/report/?site=${site}`, header);
//         return await rs
//     }
//     async getReports(id) {
//         const header = await this.buildHeader('GET');
//         const rs = await this.getResource(`/site/${id}/report`, header);
//         return await rs;
//     }
//     async getTariff(id = '') {
//         const header = await this.buildHeader('GET');
//         const rs = await this.getResource(`/tariff/${id}`, header);
//         return await rs;
//     }
//     async getByUrl(url) {
//         const header = await this.buildHeader('GET');
//         const rs = await this.getResource(url, header);
//         return await rs;
//     }
// }
// export {Some};
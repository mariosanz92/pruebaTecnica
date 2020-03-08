class Clients {

    constructor() {
        this.apiUrl = 'https://ecommerce.v1.backend.pre.mrjeffapp.net'
        this.token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0LWZyb250ZWRAbXJqZWZmYXBwLmNvbSIsInJvbGVzIjpbIlJPTEVfQ1VTVE9NRVIiXSwibmFtZSI6IkNhcmxvcyIsImlzcyI6ImJhY2tlbmQubXJqZWZmYXBwLm5ldCIsImlkIjoiMjk3NGQ4NGEtZDBhZS00MTQwLWJlZjktNjRjYWE0NmNmMDFhIiwiZnVsbG5hbWUiOiJDYXJsb3MgSGVybsOhbmRleiIsInR5cGUiOiJjdXN0b21lciIsImV4cCI6MTU4NDAwOTI2NywiaWF0IjoxNTgzNDA0NDY3LCJqdGkiOiJhMDNlMzUzYS0wMmZkLTQ3ZjEtYThlMi1jNjRiMmNiMzllM2IiLCJlbWFpbCI6InRlc3QtZnJvbnRlZEBtcmplZmZhcHAuY29tIn0.Zoy-Y5phhvor_QIuuU9cDn8pmbDbQ68a575ss0LbU9iwlw_1fOe-zQKeujq_3hOQCK6_yyD56mBptuIVU6z1-g'
    }
    async _callApi(endpoint) {
        const url = this.apiUrl + endpoint
        const myHeaders = new Headers();
        myHeaders.append('Authorization', this.token);
        
        return await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: myHeaders,
        })
            .then(response => response.json())
            .then((data) => {
                return data
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getOrders() {
        return this._callApi('/apps/orders/search/findByCustomerId')
    }


}

export default Clients;
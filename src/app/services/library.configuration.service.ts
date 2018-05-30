export function setConfig(http) {
    http.get('/assets/jsonData/Config.json')
        .subscribe(
        response => { sessionStorage.setItem('configurations', JSON.stringify(response)); },
        err => { console.log('error, while setting configuration as session storage.'); }
        );
}

export function getConfiguration(): Promise<any> {
    try {
        const configData = sessionStorage.getItem('configurations');
        return Promise.resolve(JSON.parse(configData));
    } catch (error) {
        console.log('error, while fetching configuratiion setting');
        return Promise.reject('error, while fetching configuratiion setting');
    }
}

export function updateConfig(data): Promise<any> {
    try {
        sessionStorage.setItem('configurations', JSON.stringify(data));
        return Promise.resolve('Configuration Data Updated Successfully.');
    } catch (exception) {
        console.log('error, while updating configuration in session storage.');
        return Promise.reject('error, while updating configuration in session storage.');
    }
}


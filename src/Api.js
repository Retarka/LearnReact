

const serverGetUrl = 'https://ipinfo.io/161.185.160.93/geo';
const serverPutUrl = '';


const getData = (onSuccess) => {
    return fetch(serverGetUrl)
        .then((response) => response.json())
        .then(onSuccess)
        .catch('Error')
};

const sendData = (onSuccess, onFail, body) => {
    fetch(serverPutUrl,
        {
            method: 'POST',
            body,
        },
    )
        .then((response) => {
            if (response.ok) {
                onSuccess();
            } else {
                onFail();
            }
        })
        .catch(() => {
            onFail();
        });
}

export { getData, sendData };
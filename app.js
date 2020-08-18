fetch('https://raw.githubusercontent.com/s0nnyhu/piano/develop/data.json',
    {
        method: 'GET'
    })
    .then((oResponse) => { return oResponse.json(); })
    .then((oData) => {
        console.log(oData);
    });
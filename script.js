document.getElementById('btn').addEventListener('click', handleClick);

function handleClick() {
    const num = parseFloat(document.getElementById('ip').value);

    new Promise((resolve) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    })
    .then(result => {
        document.getElementById('output').innerText = `Result: ${result}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result * 2);
            }, 1000);
        });
    })
    .then(result => {
        document.getElementById('output').innerText = `Result: ${result}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result - 3);
            }, 1000);
        });
    })
    .then(result => {
        document.getElementById('output').innerText = `Result: ${result}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result / 2);
            }, 1000);
        });
    })
    .then(result => {
        document.getElementById('output').innerText = `Result: ${result}`;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result + 10);
            }, 1000);
        });
    })
    .then(finalResult => {
        document.getElementById('output').innerText = `Final Result: ${finalResult}`;
    })
    .catch(error => {
        document.getElementById('output').innerText = `Error: ${error}`;
    });
}

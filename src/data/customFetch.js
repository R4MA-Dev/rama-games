let isOk = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        if (isOk) {
            setTimeout(() => {
                resolve(task)
            }, time);
        } else {
            reject("Error")
        }
    });
}

export default customFetch
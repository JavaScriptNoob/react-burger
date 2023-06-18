export const errorHandling = (res: Response): Promise<any> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

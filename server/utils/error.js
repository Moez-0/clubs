export const handleError = (error , statusCode) => {
    const err = new Error(error);
    err.statusCode = statusCode;
    err.message = message;
    return err;
}
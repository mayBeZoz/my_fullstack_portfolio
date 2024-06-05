

class AppError extends Error {
    constructor(message,response_code,status_code) {
        super()
        this.message = message ;
        this.response_code = response_code ;
        this.status_code = status_code;
    }
}

module.exports = AppError
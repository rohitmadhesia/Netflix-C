export const Validate = (email,password) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const vaildPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!validEmail) return "Email id is not valid"
    if(!vaildPassword) return "Password is not valid"

    return null
}
export function validateEmailAndPassword(email: string, password: string) {
    const emailRegex = /\S+@\S+\.\S+/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    const emailIsValid = emailRegex.test(email)
    const passwordIsValid = passwordRegex.test(password)

    if(!emailIsValid || !passwordIsValid) {
        const errors = [];
      
        if(!passwordIsValid) {
            if (password.length < 8) {
                errors.push("La contraseña debe tener al menos 8 caracteres.")
            }
            
            if (!/[0-9]/.test(password)) {
              errors.push("La contraseña debe contener al menos un dígito.")
            }
        
            if (!/[a-z]/.test(password)) {
              errors.push("La contraseña debe contener al menos una letra minúscula.")
            }
        
            if (!/[A-Z]/.test(password)) {
              errors.push("La contraseña debe contener al menos una letra mayúscula.")
            }
        }

        if(!emailIsValid) {
            errors.push("El email no es válido.")
        }

        return errors
      }

      return true
}
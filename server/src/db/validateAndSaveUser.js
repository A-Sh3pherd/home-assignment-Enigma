// Function that is responsible for validating and saving a user
const validateAndSaveUser = async ( User, name, email ) => {
    if (name.length < 3) {
        return { error: 'Name must be at least 3 charachters' }
    }

    if (!validateEmail(email)) {
        return { error: 'Email is invalid.' }
    }
    // Finding or creating a user
    const [ user, created ] = await User.findOrCreate({ where: { name, email } })
    if (!created) {
        return { error: 'User already exists.' }
    }

    return { user }
}

// Email validation
function validateEmail( mail ) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return true
    }
    return false
}

module.exports = { validateAndSaveUser }
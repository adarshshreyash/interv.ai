import jwt from "jsonwebtoken"

// frontend data
const genToken = async (userId) => {
try {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"7d"})
    return token
} catch (error) {
    console.log(error)
}

}
export default genToken
// create user


// create token

// store token inside cookie
import axios from "axios"
const {createContext} = require("react")

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    // const [user, setUser] = useState(null)
    const login = async(payload) => {
        const apiResponse = await axios.post("https://api.escuelajs.co/api/v1/auth/login", payload)
        console.log(apiResponse)
        // setUser(apiResponse.data.access_token)
}
 return(
    <AuthContext.Provider value={{login}}>{children}</AuthContext.Provider>
 )
}


export default AuthContext
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import Header from '../../components/Header'

export default function News(){
    const { signOut } = useContext(AuthContext);
    
    return(
        <div>
            <Header/>
            <button onClick={ ()=> signOut() }> Sair da conta</button>
        </div>
    ) 
}
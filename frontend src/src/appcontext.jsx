import { useEffect, useState} from "react";
import { UserContext } from "./usercontext.jsx";

function Appcontext({children}){
    const backendURL='/resumeAnalyser/entry/v1'
    const serviceURL='/resumeAnalyserCore/service/v1'
    const [islogged,setislogged]=useState(false)
    const [isprevious,setisprevious]=useState(false)
    const [username,setusername]=useState("")
    const [isauthenticated,setisauthenticated]=useState(false)


   useEffect(() => {
        fetch(`${serviceURL}/isValid`, { method: "post", credentials: 'include' }).then(response => {
            if (response.ok) {
                return response.json()
                
            }
            else {
                setisauthenticated(true)
                return;
            }
        })
            .then(data => {
                if (data != null) {
                    setusername(data.username);
                    setisprevious(data.isPrevious)
                    setislogged(true)
                    setisauthenticated(true)
                }
            }).catch(() => setisauthenticated(true))

    }, [serviceURL])


    const arr ={islogged,setislogged,isprevious,setisprevious,username,setusername,backendURL,serviceURL,isauthenticated}

    return (
        <UserContext.Provider value={arr}>
            {children}
        </UserContext.Provider>
    )
}

export default Appcontext



import * as React from 'react';
import { Typography , Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
//import SignIn from "SignIn.tsx"

function Welcome(){
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/login");
    }

    return(
        <Typography>
            <div>
                Welcome
            </div>
            <div>
                <Button
                    type='button'
                    onClick={handleClick}
                >
                    Login
                </Button>
            </div>
        </Typography> 
    )
}

export default Welcome;
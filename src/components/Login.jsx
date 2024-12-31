import React from "react";
import LoginAuthHeader from "./LoginAuthHeader";
import UseGoogle from "./UseGogle";
import LoginForm from "./LoginForm";

const Login = () => {
    return(
        <section className="Base__BG-sc-13yk3ta-0 jpLLUW"
>
            <div className="base__Base-sc-ci3gcl-0 Flex-sc-s3ojy4-0 fetDlP eIOfZa">
                <div className="Base__FormContainer-sc-13yk3ta-4 fvXHFm">
                    <LoginAuthHeader />
                </div>
                <UseGoogle />
                <div className="formulaire">
                    <LoginForm />
                </div>
            </div>
        </section>
    )
}

export default Login
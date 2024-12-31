import React from "react";
import AuthHeader from "./AuthHeader";
import UseGoogle from "./UseGogle";
import Form from "./Form";

const Registation = () => {
    return(
        <section className="Base__BG-sc-13yk3ta-0 jpLLUW"
>
            <div className="base__Base-sc-ci3gcl-0 Flex-sc-s3ojy4-0 fetDlP eIOfZa">
                <div className="Base__FormContainer-sc-13yk3ta-4 fvXHFm">
                    <AuthHeader />
                </div>
                <UseGoogle />
                <div className="formulaire">
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Registation;
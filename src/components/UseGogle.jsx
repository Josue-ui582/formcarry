import React from "react";
import { Link } from "react-router-dom";

const UseGoogle = () => {
    return(
        <div className="base__Base-sc-ci3gcl-0 Box__StyledBox-sc-bsh3vb-0 gtfsWd cLYjrg">
            <section className="section">
                <Link to="https://back.formcarry.com/auth/google" className="Base__GoogleButton-sc-13yk3ta-2 dTDndl">
                        <img src="google-logo.png" alt="Google-Logo" width="20" />
                    Continue with Google
                </Link>
                <div class="container">
                    <p class="text">
                        <span>or Sign up with email</span>
                    </p>
                </div>

            </section>
        </div>
    )
}

export default UseGoogle;
import { useState } from "react";

import { ReactComponent as PasswordHidden } from "../assets/images/RegisterForm/passwordHidden.svg";
import { ReactComponent as PasswordLock } from "../assets/images/RegisterForm/passwordLock.svg";
import { ReactComponent as ShowPassword } from "../assets/images/RegisterForm/showPassword.svg";

const PasswordComponent = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="parent">
                <input type={showPassword ? "text" : "password"} placeholder="Password" required />
                <PasswordLock className="childImage" />
                {showPassword ? (
                    <PasswordHidden
                        className="secondChildImage"
                        onClick={togglePasswordVisibility}
                    />
                ) : (
                    <ShowPassword className="secondChildImage" onClick={togglePasswordVisibility} />
                )}
            </div>
            <div className="parent">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    required
                />
                <PasswordLock className="childImage" />
                {showPassword ? (
                    <PasswordHidden
                        className="secondChildImage"
                        onClick={togglePasswordVisibility}
                    />
                ) : (
                    <ShowPassword className="secondChildImage" onClick={togglePasswordVisibility} />
                )}
            </div>
        </>
    );
};

export default PasswordComponent;

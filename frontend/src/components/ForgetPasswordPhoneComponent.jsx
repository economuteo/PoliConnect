import Wrapper from "../assets/wrappers/PhoneNumberComponent";
import { ReactComponent as PhoneIcon } from "../assets/images/phoneIcon.svg";

const PhoneNumberComponent = () => {
    return (
        <Wrapper>
            <p className="title">Enter Your Phone Number</p>
            <form>
                <div className="parent">
                    <input type="tel" placeholder="Phone Number" required />
                    <PhoneIcon className="childImage" />
                </div>
            </form>
            <div className="buttons">
                <button>Verification</button>
                <button>Later</button>
            </div>
        </Wrapper>
    );
};

export default PhoneNumberComponent;

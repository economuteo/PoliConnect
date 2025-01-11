import PropTypes from "prop-types";
import Wrapper from "../../assets/wrappers/OnBoardingComponent";

const onBoardingTemplateComponent = ({ SVGComponent, firstParagraph, secondParagraph }) => {
    return (
        <Wrapper className="container">
            <img src={SVGComponent} className="SVGComponent" />
            <p className="title" dangerouslySetInnerHTML={{ __html: firstParagraph }} />
            <p className="shortDescription" dangerouslySetInnerHTML={{ __html: secondParagraph }} />
        </Wrapper>
    );
};

onBoardingTemplateComponent.propTypes = {
    SVGComponent: PropTypes.elementType.isRequired,
    firstParagraph: PropTypes.string.isRequired,
    secondParagraph: PropTypes.string.isRequired,
};

export default onBoardingTemplateComponent;

import styled from "styled-components";

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    .SVGComponent {
        width: 100%;
        max-width: 280px;
        height: 250px;
    }

    .title {
        margin-top: 30px;
        text-align: center;
        line-height: 125%;
        font-size: 1.875rem;
        font-family: "Poppins SemiBold";
        color: white;
    }

    .shortDescription {
        margin-top: 10px;
        text-align: center;
        line-height: 20px;
        font-size: 1em;
        font-family: "Poppins Medium";
        color: #b3b2b2;
    }

    /* Responsiveness */
    @media only screen and (min-width: 768px) {
        .SVGComponent {
            max-width: 330px;
            height: 300px;
        }

        .title {
            font-size: 2.375rem;
        }

        .shortDescription {
            line-height: 40px;
            font-size: 1.375rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        .SVGComponent {
            max-width: 370px;
            height: 340px;
        }

        .title {
            font-size: 2.65rem;
        }

        .shortDescription {
            line-height: 40px;
            font-size: 1.65rem;
        }
    }
`;

export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;

    p {
        color: white;
    }

    .options {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .option {
        width: 100%;
        max-width: 400px;
        height: 120px;
        text-align: center;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background-color: #0677e8;

        p {
            font-family: "Poppins Regular";
        }
    }

    .eventIcon {
        width: 50px;
        height: 50px;
    }

    .fileInputLabel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
`;

export default Wrapper;

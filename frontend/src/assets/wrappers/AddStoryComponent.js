import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .options {
        position: sticky;
        margin-top: 30px;
        width: 100%;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "camera drafts"
            "gallery gallery";
        gap: 10px;
        justify-content: space-between;
    }

    .optionImage {
        width: 30px;
        height: 30px;
    }

    .option {
        width: 100%;
        padding: 15px 0px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        background-color: #0677e8;
    }

    .optionDescription {
        font-family: "Poppins Regular";
        font-size: 0.75em;
        color: white;
    }

    #camera {
        grid-area: camera;
    }

    #drafts {
        grid-area: drafts;
    }

    #gallery {
        grid-area: gallery;
    }

    .selectedImagePreview img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        margin-top: 20px;
    }

    p {
        color: white;
    }

    @media only screen and (min-width: 768px) {
        .options {
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: 1fr;
            grid-template-areas:
                "camera "
                "drafts"
                "gallery";
            gap: 10px;
            justify-content: space-between;
        }

        .optionDescription {
            font-size: 0.875em;
        }
    }

    @media only screen and (min-width: 1200px) {
        .optionImage {
            width: 35px;
            height: 35px;
        }

        .optionDescription {
            font-size: 1em;
        }
    }
`;

export default Wrapper;

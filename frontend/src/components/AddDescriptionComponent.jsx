import Wrapper from "../assets/wrappers/AddDescriptionComponent";

const AddDescriptionComponent = () => {
    return (
        <Wrapper>
            <h1>Additional Details</h1>
            <form>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" rows="4" cols="50"></textarea>
                <button type="submit">Submit</button>
            </form>
        </Wrapper>
    );
};

export default AddDescriptionComponent;

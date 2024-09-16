import Wrapper from "../assets/wrappers/CreateEventComponent";

const CreateEventComponent = () => {
    return (
        <Wrapper className="container">
            <div className="eventInner">
                <p className="title">Create Event</p>
                <form>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="field">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" />
                    </div>
                    <div className="field">
                        <label htmlFor="time">Time</label>
                        <input type="time" id="time" name="time" />
                    </div>
                    <div className="field">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="location" />
                    </div>
                    <div className="field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" />
                    </div>
                    <button type="submit">Create Event</button>
                </form>
            </div>
        </Wrapper>
    );
};

export default CreateEventComponent;

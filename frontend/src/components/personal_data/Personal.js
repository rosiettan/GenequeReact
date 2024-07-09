import { React } from "react";
import './personal.css'

const Personal = () => {
    return (
        <div className="content-wrap">
            <div className="survey-container">
                <h1>Personal data</h1>
                <form className="surveyForm" action="/personal" method="post">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required /><br />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required /><br />

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" required /><br />

                    <input type="submit" name="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

<script src="./js/personal.js"></script>

export default Personal;

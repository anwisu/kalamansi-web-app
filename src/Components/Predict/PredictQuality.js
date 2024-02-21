import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PredictQuality = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/predict-quality`, jsonData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data && response.data.inserted_data) {
                navigate('/result', { state: { qualityData: response.data.inserted_data } });
            } else {
                setError('Prediction failed. Please try again.');
            }
        } catch (error) {
            console.error('Prediction request failed:', error);
            setError('Prediction failed. Please try again.');
        }
    };

    return (
        <div>
            <h1>Kalamansi Quality Prediction</h1>
            <form onSubmit={handleSubmit}>
                {/* Input fields for features */}
                <label for="size">Size: </label>
                <select id="size" name="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="big">Big</option>
                </select><br />
                <label for="firmness">Firmness: </label>
                <select id="firmness" name="firmness">
                    <option value="flabby">Flabby</option>
                    <option value="firm">Firm</option>
                </select><br />
                <label for="shape">Shape: </label>
                <select id="shape" name="shape">
                    <option value="oblong">Oblong</option>
                    <option value="spherical">Spherical</option>
                </select><br />
                <label for="skin_color">Fruit Color: </label>
                <select id="skin_color" name="skin_color">
                    <option value="dull yellow">Dull yellow</option>
                    <option value="bright green">Bright green</option>
                    <option value="mixed">Mixed</option>
                </select><br />
                <label for="blemishes">Blemishes: </label>
                <select id="blemishes" name="blemishes">
                    <option value="present">Present</option>
                    <option value="not present">Not present</option>
                </select><br />
                <label for="soil_type">Soil Type: </label>
                <select id="soil_type" name="soil_type">
                    <option value="loamy">Loamy</option>
                    <option value="clayey">Clayey</option>
                    <option value="sandy">Sandy</option>
                </select><br />
                <label for="sun_exposure">Sun Exposure: </label>
                <select id="sun_exposure" name="sun_exposure">
                    <option value="full shade">Full shade</option>
                    <option value="partial shade">Partial shade</option>
                    <option value="full sun">Full sun</option>
                </select><br />
                <label for="location">Location: </label>
                <select id="location" name="location">
                    <option value="patio">Patio</option>
                    <option value="balcony">Balcony</option>
                    <option value="rooftop">Rooftop</option>
                </select><br />
                <label for="fertilized">Fertilizer: </label>
                <select id="fertilized" name="fertilized">
                    <option value="not fertilized">Not Fertilized</option>
                    <option value="fertilized">Fertilized</option>
                </select><br />
                <label for="watering_sched">Watering Schedule: </label>
                <select id="watering_sched" name="watering_sched">
                    <option value="regular">Regular</option>
                    <option value="irregular">Irregular</option>
                </select><br />
                <label for="pruning">Pruning: </label>
                <select id="pruning" name="pruning">
                    <option value="regular">Regular</option>
                    <option value="not regular">Irregular</option>
                </select><br />
                <label for="pest_presence">Pest Presence: </label>
                <select id="pest_presence" name="pest_presence">
                    <option value="yes">Present</option>
                    <option value="no">Not present</option>
                </select><br />
                <button type="submit">Predict</button>
            </form>
            {/* {qualityId && predictedQuality && (
            <table>
              <thead>
                <tr>
                  <th>Quality ID</th>
                  <th>Predicted Quality</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{qualityId}</td>
                  <td>{predictedQuality}</td>
                </tr>
              </tbody>
            </table>
          )}
          {error && <p>{error}</p>} */}
            {error && <p>{error}</p>}
            {/* {qualityData && qualityData.newQuality && (
                <div>
                    <h2>Predicted Quality</h2>
                    <p>Quality ID: {qualityData.newQuality._id}</p>
                    <p>Predicted Quality: {qualityData.newQuality.predicted_quality}</p>
                </div>
            )} */}
        </div>
    );
}

export default PredictQuality;
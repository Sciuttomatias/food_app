import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer USXDvHuCRQLS34Z-2ltovyfTk6pSeLcvVaf45DABzKOsfCeux4neZMRCtQIIafRBNWRy8DIBASSQNarMJCAfO9_B-UoqHw-75_sAtFAoCjDsgqNJv0_KAy8kKU9kYXYx'
    }
});
import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer RRq8-HbsAL_8ILM_7q4jtzsGs8bmuAeJZ71EDUBP53sMyHprdwwIyzfAsspqwHq6Lub0dFjArAQkjtD8U2oGIvLeINnW4WNCyeM_E5U8KLl6Sx8_iNWLA-1t3X-dYnYx"
    }
})
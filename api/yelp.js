import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer QNFuCOWqT-7My_rz1VjKuz_EvVK5nlgw4Txalq7MZ0ZwaIo9RrTFmL6R18ONUeSpgqNDVdlkLTnp0nC9JZ4xGMkqAPsCR0VBXwGgNY_MXpcLXrNH9x8lZi2vsBYkZnYx'
    }
})
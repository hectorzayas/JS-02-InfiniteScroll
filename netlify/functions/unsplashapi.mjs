import axios from 'axios';

const handler = async function (event, context) {
    const filterName = event.queryStringParameters.filterName;
    const randomCounter = event.queryStringParameters.randomCounter;;

    try {
        // your server-side functionality
        const { UNSPLASH_API_KEY } = process.env;

        // return {
        //     statusCode: 200,
        //     body: JSON.stringify({ message: UNSPLASH_API_KEY }),
        // };

        const config = {
            headers: {
                'Authorization': `Client-ID ${UNSPLASH_API_KEY}`
            }
        };
        const response = await axios.get(`https://api.unsplash.com/photos/random?count=${randomCounter}&query=${filterName}`, config)

        if (response.errors !== undefined && response.errors.length) {
            throw new Error(response.errors);
        }

        // handle success
        return {
            statusCode: 200,
            body: JSON.stringify({ response: response.data }),
        };

    } catch (error) {
        return {
            statusCode: 500,
            // Could be a custom message or object i.e. JSON.stringify(err)
            body: JSON.stringify({ response: error.message }),
        }
    }
};

export { handler };
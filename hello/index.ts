import { APIGatewayProxyHandler } from 'aws-lambda';


export const handler: APIGatewayProxyHandler = async (event, context) => {
    try {
        const response = {
            statusCode: 200,
            body: 'Hello, World!',
        };

        return response;
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: 'Internal Server Error',
        };
    }
};
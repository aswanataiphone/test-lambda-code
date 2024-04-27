import { APIGatewayProxyHandler } from 'aws-lambda';

export const helloImage: APIGatewayProxyHandler = async (event, context) => {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: '<html><body><h1>Hello World!</h1></body></html>',
    };

    return response;
};
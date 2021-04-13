
import { Client } from 'faunadb'
import * as q from 'faunadb/query'

export function post(request, res) {
    const client = new Client({
		secret: 'YOUR_FAUNADB_SECRET'
	});

    return client
		.query(q.Create(q.Collection('score'), { data: request.body }))
		.then((response) => {
			console.log('success', response);
			return {
				statusCode: 200,
				body: JSON.stringify(response)
			};
		})
		.catch((error) => {
			console.log('error', error);
			return {
				statusCode: 400,
				body: JSON.stringify(error)
			};
		});
}
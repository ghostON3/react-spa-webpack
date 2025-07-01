import { rest } from "msw";

import { API_BASE } from "@/api/Axios";
import {
	ChuckNorrisJoke,
	ChuckNorrisSearchResponse,
} from "@/api/requests/ChuckNorrisApi";

export const chuckHandlers = [
	rest.get(`${API_BASE}/random`, async (req, res, ctx) => {
		await ctx.delay(150);

		const category = req.url.searchParams.get("category");

		const joke: ChuckNorrisJoke = {
			categories: category ? [category] : [],
			icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
			id: "123",
			url: `${API_BASE}/123`,
			value: category
				? `Joke for category ${category}`
				: "Random Chuck Norris joke",
		};

		return res(ctx.json(joke));
	}),

	rest.get(`${API_BASE}/categories`, async (req, res, ctx) => {
		await ctx.delay(150);

		const categories = ["animal", "career", "celebrity", "dev"];
		return res(ctx.json(categories));
	}),

	rest.get(`${API_BASE}/search`, async (req, res, ctx) => {
		await ctx.delay(150);

		const query = req.url.searchParams.get("query") || "";

		const jokes: ChuckNorrisJoke[] = [
			{
				categories: [],
				icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
				id: "1",
				url: `${API_BASE}/1`,
				value: `First joke containing ${query}`,
			},
			{
				categories: [],
				icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
				id: "2",
				url: `${API_BASE}/2`,
				value: `Second joke with ${query}`,
			},
		];

		const response: ChuckNorrisSearchResponse = {
			total: jokes.length,
			result: jokes,
		};

		return res(ctx.json(response));
	}),
];

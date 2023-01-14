const KangaServices = () => {
	const URL = 'http://localhost:4000/movies';

	const getResource = async (url) => {
		let result = await fetch(url);

		if (!result.ok) {
			console.log(`Status error: ${result.status}`);
		}

		return await result.json();
	}

	return getResource(URL);
}

export default KangaServices;
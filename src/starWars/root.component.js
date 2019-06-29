import React, {useState, useEffect} from "react";

const Card = ({title, attrs}) => {
	return (
		<div className="tile is-parent">
			<div className="tile is-child notification is-success">
				<div className="card">
					<header className="card-header">
						<p className="card-header-title">
							{title}
						</p>
					</header>

					<div className="card-content">
						<div className="content">
							<ul>
								{
									attrs.map(attr => (<li key={attr.key}>{`${attr.key}: ${attr.val}`}</li>))
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const getPeople = (page, signal) => {
	return fetch(`https://swapi.co/api/people/?page=${page}`, { signal })
		.then(res => res.json())
		.then(data => {
			return data.results;
		})
};

export default () => {
	const [isLoading, setLoading] = useState(0);
	const [items, setItems] = useState([]);

	const startFetch = () => {
		setLoading(isLoading + 1);
	};

	const finishFetch = () => {
		setLoading(isLoading ? isLoading - 1 : 0);
	};

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		startFetch();
		if(!items.length) {

			Promise.all([
				getPeople(1, signal),
				getPeople(2, signal),
				getPeople(3, signal),
				getPeople(4, signal),
				getPeople(5, signal),
				getPeople(6, signal),
				getPeople(7, signal),
				getPeople(8, signal),
			])
			.then(resultsList => {
				finishFetch();

				const res = resultsList.reduce((acc, val) => [...acc, ...val], []);
				setItems(res);

			})
			.catch(err => null);

			return () => controller.abort();
		}
	}, []);

	return(
		<div className="container">
			<h1 style={{ fontSize: '2rem', fontWeight: '600'}}>STAR WARS</h1>
			{ !isLoading
				? items.map(item => (<Card key={item.url} title={item.name} attrs={[
					{
						key: 'height',
						val: item.height,
					},
					{
						key: 'mass',
						val: item.mass,
					},
					{
						key: 'gender',
						val: item.gender,
					},
				]}/>))
				: <div><a className="button is-large is-primary is-loading">Loading</a></div>
			}
		</div>
	);
};
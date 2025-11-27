import React, { useState } from 'react';

const App = () => {
	const [contacts, setContacts] = useState([]);

	const addContact = (event) => {
		event.preventDefault();
		const name = document.getElementById("inputName").value;
		const phone = document.getElementById("inputNumber").value;

		const object = { name, phone };

		console.log(object);

		setContacts([...contacts, object]);

		document.getElementById("inputName").value = ''; 
		document.getElementById("inputNumber").value = ''; 
	};

	const [query, setQuery] = useState("");

	const handleSearch = (e) => {
		setQuery(e.target.value);
	};

	const filteredContacts = contacts.filter((c) => {
		const q = query.trim().toLowerCase();
		return (
			(c.name && c.name.toLowerCase().includes(q)) ||
			(c.phone && c.phone.toLowerCase().includes(q))
		);
	});

	return (
		<>
			<form onSubmit={addContact}>
				<p>Input Name & Surname</p>
				<input
					id="inputName"
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
					required
				/>

				<p>Input Phone Number</p>
				<input
					id="inputNumber"
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
				/>

				<button type="submit">Add contact</button>
			</form>

			<p>Search contact:</p>
			<input
				type="text"
				id="findContact"
				value={query}
				onChange={handleSearch}
				placeholder="Search by name or phone"
			/>

			<b>All Contacts:</b>
			<div>
				{filteredContacts.length === 0 ? (
					<p>No contacts found.</p>
				) : (
					filteredContacts.map((contact, idx) => (
						<div>
							<p>
								{contact.name}: {contact.phone}
							</p>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default App;

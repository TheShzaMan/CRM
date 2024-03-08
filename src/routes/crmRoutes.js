import {
	addNewContact,
	getContacts,
	getContactWithId,
	updateContact,
	deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
	app.route("/contact")

		// get all contacts
		.get((req, res, next) => {
			//middleware
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request  type: ${req.method}`);
			next();
		}, getContacts)

		// add new contact info to db
		.post(addNewContact);

	app.route("/contact/:contactId")
		//  get specific contact
		.get(getContactWithId)

		// update contact info
		.put(updateContact)

		// delete contact from db
		.delete(deleteContact);
};
export default routes;

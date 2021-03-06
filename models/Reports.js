const db = require('../data/dbconfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	findByTeam,
	findByUserId,
	update,
	remove
};

// Create report
async function add(report) {
	const [id] = await db('reports')
		.insert(report)
		.returning('id');

	return findById(id);
}

// Get all reports
function find() {
	return db('reports');
}

// Get report by id
function findById(id) {
	return db('reports')
		.where({ id })
		.first();
}

// Get report by filter
function findBy(filter) {
	return db('reports').where(filter);
}

// Get report by team id
async function findByTeam(teamId) {
	const reports = await db('reports').where({ teamId });
	return reports;
}

// Get reports by user id
async function findByUserId(userId) {
	const reports = await db('reports').where({ userId });
	return reports;
}

// Update report
async function update(id, report) {
	await db('reports')
		.where({ id })
		.update(report);

	return findById(id);
}

// Delete report
function remove(id) {
	return db('reports')
		.where({ id })
		.del();
}

const knex = require("../db/connection")

const list = (date) => {
    return knex("reservations")
    .whereNot({ status: "finished" })
    .andWhereNot({ status: "cancelled" })
    .andWhere({ reservation_date: date })
    .orderBy("reservation_time");
}

const read = (reservation_id) => {
    return knex("reservations")
    .where({ reservation_id: reservation_id })
    .first();
}

const create = (reservation) => {
    return knex("reservations")
    .insert(reservation)
    .returning("*")
    .then((createdRes) => createdRes[0]) 
}

const update = (chagedReservation) => {
    return knex("reservations")
    .select("*")
    .where({ reservation_id: chagedReservation.reservation_id })
    .update(chagedReservation, "*")
    .then((records) => records[0]);
}
const search = (mobile_number) => {
    return knex("reservations")
    .whereRaw(
      "translate(mobile_number, '() -', '') like ?",
      `%${mobile_number.replace(/\D/g, "")}%`
    )
    .orderBy("reservation_date");
}

module.exports = {
    list,
    read,
    create,
    update,
    search,
}
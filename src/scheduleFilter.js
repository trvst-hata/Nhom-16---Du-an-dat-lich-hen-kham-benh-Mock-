function filterAppointmentsByDate(appointments, targetDate) {
    if (!Array.isArray(appointments) || !targetDate) return [];
    return appointments.filter(item => item.date === targetDate);
}

module.exports = { filterAppointmentsByDate };

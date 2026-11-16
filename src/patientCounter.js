function countConfirmedPatients(appointments) {
    if (!Array.isArray(appointments)) return 0;
    return appointments.filter(item => item.status === 'CONFIRMED').length;
}

module.exports = { countConfirmedPatients };
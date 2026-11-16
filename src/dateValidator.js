function isValidAppointmentDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return false;
    // Kiểm tra định dạng YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateStr)) return false;

    const date = new Date(dateStr);
    return !isNaN(date.getTime());
}

module.exports = { isValidAppointmentDate };
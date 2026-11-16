const { isValidAppointmentDate } = require('../src/dateValidator');

test('Hợp lệ khi ngày khám đúng định dạng YYYY-MM-DD', () => {
    // 1. Arrange
    const validDate = '2026-11-16';
    // 2. Act
    const result = isValidAppointmentDate(validDate);
    // 3. Assert
    expect(result).toBe(true);
});

test('Không hợp lệ khi ngày khám sai định dạng hoặc rỗng', () => {
    // 1. Arrange
    const invalidDate = '16/11/2026';
    // 2. Act
    const result = isValidAppointmentDate(invalidDate);
    // 3. Assert
    expect(result).toBe(false);
});
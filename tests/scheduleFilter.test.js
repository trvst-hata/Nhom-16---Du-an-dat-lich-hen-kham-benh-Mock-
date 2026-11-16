const { filterAppointmentsByDate } = require('../src/scheduleFilter');

test('Lọc đúng các ca khám trùng với ngày chỉ định', () => {
    // 1. Arrange
    const list = [
        { patient: 'An', date: '2026-11-16', time: '08:00' },
        { patient: 'Bình', date: '2026-11-17', time: '09:00' }
    ];
    // 2. Act
    const result = filterAppointmentsByDate(list, '2026-11-16');
    // 3. Assert
    expect(result.length).toBe(1);
    expect(result[0].patient).toBe('An');
});

test('Trả về mảng rỗng nếu ngày đó bác sĩ không có lịch khám', () => {
    // 1. Arrange
    const list = [{ patient: 'An', date: '2026-11-16', time: '08:00' }];
    // 2. Act
    const result = filterAppointmentsByDate(list, '2026-11-25');
    // 3. Assert
    expect(result).toEqual([]);
});

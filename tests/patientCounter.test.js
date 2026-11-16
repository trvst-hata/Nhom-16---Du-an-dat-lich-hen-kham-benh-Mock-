const { countConfirmedPatients } = require('../src/patientCounter');

test('Đếm đúng số bệnh nhân đã xác nhận lịch khám', () => {
    // 1. Arrange
    const list = [
        { patient: 'An', status: 'CONFIRMED' },
        { patient: 'Bình', status: 'CANCELLED' },
        { patient: 'Chi', status: 'CONFIRMED' }
    ];
    // 2. Act
    const count = countConfirmedPatients(list);
    // 3. Assert
    expect(count).toBe(2);
});

test('Trả về 0 nếu không có bệnh nhân nào xác nhận', () => {
    // 1. Arrange
    const list = [{ patient: 'Bình', status: 'CANCELLED' }];
    // 2. Act
    const count = countConfirmedPatients(list);
    // 3. Assert
    expect(count).toBe(0);
});
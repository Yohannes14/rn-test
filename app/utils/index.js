export const dataArray = [];
for (let i = 0; i < 20; i++) {
    const row = [];
    for (let j = 0; j < 20; j++) {
        row.push({ rowIndex: i, colIndex: j });
    }
    dataArray.push(row);
}

export const API_URL = 'https://65b683deda3a3c16ab00d19d.mockapi.io';

export const COLORS = {
    darkBlue: '#00008B',
    white: "#FFFFFF",
    darkGray: "#242424",
}
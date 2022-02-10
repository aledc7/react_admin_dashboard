const userData = [
    {
        name: 'Enero',
        "active_user": 51,
    },
    {
        name: 'Febrero',
        "active_user": 22,
    },
    {
        name: 'Marzo',
        "active_user": 12,
    },
    {
        name: 'Abril',
        "active_user": 23,
    },
    {
        name: 'Mayo',
        "active_user": 34,
    },
    {
        name: 'Junio',
        "active_user": 22,
    },
    {
        name: 'Julio',
        "active_user": 34,
    },
    {
        name: 'Agosto',
        "active_user": 31,
    },
    {
        name: 'Septiembre',
        "active_user": 12,
    },
    {
        name: 'Octubre',
        "active_user": 32,
    },
    {
        name: 'Noviembre',
        "active_user": 43,
    },
    {
        name: 'Diciembre',
        "active_user": 66,
    },

];





const userRows = [
    { id: 1, userName: 'Ale DC', avatar: 'https://i.pravatar.cc/99', email: 'aledc@gmail.com', status: 'Active', transaction: '$18.500.000' },
    { id: 2, userName: 'Rogher Watters', avatar: 'https://i.pravatar.cc/101', email: 'aledc@gmail.com', status: 'Active', transaction: '$18.500.000' },
    { id: 3, userName: 'Steeve Jobs', avatar: 'https://i.pravatar.cc/102', email: 'aledc@gmail.com', status: 'Active', transaction: '$18.500.000' },
    { id: 4, userName: 'Phill Colins', avatar: 'https://i.pravatar.cc/103', email: 'aledc@gmail.com', status: 'Active', transaction: '$18.500.000' },
    { id: 5, userName: 'Fernando Vatuone', avatar: 'https://i.pravatar.cc/104', email: 'aledc@gmail.com', status: 'Active', transaction: '$18.500.000' },
    { id: 6, userName: 'Roberto Carlos', avatar: 'https://i.pravatar.cc/105', email: 'aledc@gmail.com', status: 'Active', transaction: '$18.500.000' },
    { id: 7, userName: 'Nico Vicente', avatar: 'https://i.pravatar.cc/106', email: 'aledc@gmail.com', status: 'Active', transaction: '$18.500.000' },
    { id: 8, userName: 'Rocio Penciarolo', avatar: 'https://i.pravatar.cc/107', email: 'aledc@gmail.com', status: 'Active', transaction: '$18.500.000' },
    { id: 9, userName: 'Ezequiel Pollo', avatar: 'https://i.pravatar.cc/108', email: 'aledc@gmail.com', status: 'Active', transaction: '$18.500.000' },
    { id: 10, userName: 'Gerar Lavanderia', avatar: 'https://i.pravatar.cc/109', email: 'aledc@gmail.com', status: 'Active', transaction: '$18.500.000' }
];

const productRows = [
    { id: 1, name: 'Apple Airpods', img: 'https://picsum.photos/200', stock: '25', status: 'Active', price: 'u$ 30' },
    { id: 2, name: 'Macbook Pro 16"', img: 'https://picsum.photos/199', stock: '10', status: 'Active', price: 'u$2400' },
    { id: 3, name: 'iPhone 13', img: 'https://picsum.photos/198', stock: '30', status: 'Active', price: 'u$1200' },
    { id: 4, name: 'Fan Small for desktop', img: 'https://picsum.photos/197', stock: '7', status: 'Active', price: 'u$10' },
    { id: 5, name: 'Audio Monitors Yamaha', img: 'https://picsum.photos/196', stock: '5', status: 'Active', price: 'u$500' },
    { id: 6, name: 'Apple Magic Mouse', img: 'https://picsum.photos/195', stock: '6', status: 'Active', price: 'us$250' },
    { id: 7, name: 'Apple Monitor', img: 'https://picsum.photos/194', stock: '5', status: 'Active', price: 'u$1500' },
    { id: 8, name: 'Brush for clean the Mac', img: 'https://picsum.photos/193', stock: '50', status: 'Active', price: 'u$7' },
    { id: 9, name: 'Desktop comfortable', img: 'https://picsum.photos/192', stock: '0', status: 'Inactive', price: '$u$1200' },
    { id: 10, name: 'Conditioner Air', img: 'https://picsum.photos/191', stock: '2', status: 'Active', price: 'u$700' }
];

const productData = [
    {
        name: 'Enero',
        "Ventas": 21,
    },
    {
        name: 'Febrero',
        "Ventas": 32,
    },
    {
        name: 'Marzo',
        "Ventas": 22,
    }

];




export { userData, userRows, productRows, productData };


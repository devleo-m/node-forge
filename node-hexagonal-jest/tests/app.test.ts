import axios from 'axios';

test('Axios hello world', async () => {
    const response = await axios.get('http://localhost:3000');
    expect(response.status).toBe(200);
    expect(response.data).toBe('Hello, world!');
});

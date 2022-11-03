import KY from 'ky';

const API_URL = import.meta.env.VITE_API_URL;

const ky = KY.create({ prefixUrl: API_URL });

export default ky;

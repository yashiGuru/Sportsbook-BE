exports.SERVER = {
    NAME: process.env.SERVER_NAME || 'SportBook',
    PORT: process.env.PORT || '3000',
    PATH: process.env.URL || 'http://localhost:3000'
};

exports.LANGUAGE = {
    ALLOWED: ['en', 'es'],
    DEFAULT: 'en'
};
const jwt = require('jsonwebtoken');
const config = require('../../../core/config/jwt.config');
const { verifyToken, generateAccessToken, generateRefreshToken } = require('../../../core/middleware/jwt.authentication');

const refreshAccessTokenController = async(req, res) => {
    try {
        // Obtener el refreshToken de la solicitud
        const refreshToken = req.body.refreshToken;

        // Verificar y decodificar el refreshToken
        const decodedRefreshToken = jwt.verify(refreshToken, config.refreshTokenSecret);

        // Generar un nuevo accessToken y refreshToken
        const newAccessToken = generateAccessToken(decodedRefreshToken.userId);
        const newRefreshToken = generateRefreshToken(decodedRefreshToken.userId);

        // Enviar los nuevos tokens como respuesta
        res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = refreshAccessTokenController
//Health

/**
 * @swagger
 * /service/api/market/v1/ping:
 *   get:
 *     tags:
 *       - health
 *     description: Ping endpoint
 *     responses:
 *       200:
 *         description: Successful ping response
 *
 */
 
//----------------------------------------------USER------------------------------------------------------------------
/**
 * @swagger
 * /service/api/market/v1/user/post:
 *   post:
 *     tags:
 *       - user
 *     description: Ping endpoint with email and password payload
 *     requestBody:
 *       description: Payload for the POST request
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Successful ping response
 */


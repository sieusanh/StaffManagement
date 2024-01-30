

// const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

// app.use(function (req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });

// app.use('/api', function (req, res, next) {
//     console.log('Middleware api');
//     if (1 == 1) {
//         next();
//     } else {
//         return res.status(500).json({
//             message: 'Equality error.'
//         });
//     }
// }, function (req, res, next) {
//     next();
// });

// app.use('/user/:id', function (req, res, next) {
//     console.log('Request Type: ', (req.method));
//     next();
// });

// app.get('/user/:id', function (req, res, next) {
//     res.status(200).json({ message: 'User' });
// });

// app.post('/api/users/token', function (req, res) {
//     const data = req.body;
//     const accessToken = jwt.sign(data, ACCESS_TOKEN_SECRET, {
//         expiresIn: '30s'
//     });
//     res.json({ accessToken });
// });

// function authenToken(req, res, next) {
//     const authorization = req.headers['authorization'];
//     const token = authorization && authorization.split(' ')[1];

//     if (!token) {
//         return res.status(401).json({
//             message: 'Identity required.'
//         })
//     }

//     try {
//         jwt.verify(token, ACCESS_TOKEN_SECRET);
//         next();
//     } catch (err) {
//         return res.status(403).json({
//             message: 'Incorrect username or password.'
//         });
//     }
// }

// app.use('/api/users', function (req, res, next) {
//     const authorization = req.headers['authorization'];
//     const token = authorization && authorization.split(' ')[1];

//     console.log('middleware api/users');

//     if (!token) {
//         return res.status(401).json({
//             message: 'Identity required.'
//         });
//     }

//     try {
//         jwt.verify(token, ACCESS_TOKEN_SECRET);
//         next();
//     } catch (err) {
//         return res.status(403).json({
//             message: 'Incorrect username or password.'
//         });
//     }
// });

// app.get('/api/users/me/', function (req, res) {
//     res.status(200).json({
//         data: 'ok'
//     });
// });

// app.listen(PORT, function (error) {
//     if (error) {
//         console.log('Server error: ', error);
//     }
//     console.log(`server port ${PORT}`);
// });


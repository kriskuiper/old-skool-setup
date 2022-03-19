const { Router } = require('express');

const router = Router();

router.get('/', (_, response) => {
    response.render('index.html');
});

module.exports = router;
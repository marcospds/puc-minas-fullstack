const express = require('express');
const app = express();
const port = 3000; // Porta do servidor

app.get('/jwks', (req, res) => {
    res.json({"keys":[{"kty":"RSA","use":"sig","kid":"2bb6fc523fc740f286c196fca1352716","e":"AQAB","n":"zZZO9SXYGSM35yw-yhnUetDw0zg3EHy1p2UkVU-zoC_PXqDk-eaEaa1dlZzOy8MbBbjeP7zj4SL_FlOO40_dhm3DruQvO5O90KhD4UHkcdazgFhFCKnJhFtZ9m_PjtOE2CwcdzpWCy0Q8L1rVhwrWXqT-_o1lJgzdoeDGoCdecjBvGhHnuyPOId67IZQN1jRCMlVHs8goBfxnp5cEV-9YxN-x3ko3q7dzI_k1-WryvxCyXLuQYyYNEfkifGKURQ-otExu9V2xRK-HuHC8_3QWkZnD6Go0argCv1Roe8ZAl7sHdtelZtdhPFbv5O_rr3HfkU1b1iXvIBnD9nvFiaBCQ","alg":"RS256"}]});
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
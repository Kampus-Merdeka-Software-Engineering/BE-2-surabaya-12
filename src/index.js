require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');

const roomRoutes = require('./routes/room');
const eventRoutes = require('./routes/event');
const aboutRoutes = require('./routes/about');
const customerRoutes = require('./routes/customer');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json());

app.use('/room', roomRoutes);
app.use('/event', eventRoutes);
app.use('/customer', customerRoutes);
app.use('/about', aboutRoutes);

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
});

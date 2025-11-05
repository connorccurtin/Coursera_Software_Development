const { app, PORT } = require('./config/server');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// Connect to the database
connectDB();

// Use routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
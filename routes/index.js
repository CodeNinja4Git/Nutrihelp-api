module.exports = app => {
    app.use("/api/login", require('./login'));
    app.use("/api/signup", require('./signup'));
    app.use("/api/contactus", require('./contactus'));
    app.use("/api/userfeedback", require('./userfeedback'));
    app.use("/api/recipe", require('./recipe'));
    app.use("/api/appointments", require('./appointment'));
};
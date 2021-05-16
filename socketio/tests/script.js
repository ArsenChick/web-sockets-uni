// script.js

module.exports = { createSizedMessage };

function createSizedMessage(userContext, events, done) {
    let buffer = new ArrayBuffer(1024 * 1024);
    let view = new Uint32Array(buffer);

    for (i = 0; i < view.length; i++) {
        view[i] = Math.random() * 10 + 1;
    }

    userContext.vars.data = view;
    return done();
};
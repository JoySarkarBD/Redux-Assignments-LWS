const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const videoReducer = require("../features/video/videoSlice");
const matchVideoReducer = require("../features/matchVideo/matchVideoSlice");

const logger = createLogger();

const store = configureStore({
  reducer: {
    video: videoReducer,
    matchVideos: matchVideoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;

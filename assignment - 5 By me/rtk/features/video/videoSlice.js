const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const { fetchMatchVideo } = require("../matchVideo/matchVideoSlice");

const initialState = {
  isLoading: false,
  video: [],
  isError: null,
};

// async thunk function
const fetchVideo = createAsyncThunk("video/fetchVideo", async (_, thunkAPI) => {
  const res = await fetch("http://localhost:9000/videos");
  const video = await res?.json();

  thunkAPI.dispatch(fetchMatchVideo(video.tags));

  // return console.log(thunkAPI);

  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending, (state) => {
      state.isLoading = true;
      state.video = [];
      state.isError = null;
    });

    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.video = action.payload;
      state.isError = null;
    });

    builder.addCase(fetchVideo.rejected, (state, action) => {
      state.isLoading = false;
      state.video = [];
      state.isError = action.error.message;
    });
  },
});

module.exports = videoSlice.reducer;
module.exports.fetchVideo = fetchVideo;

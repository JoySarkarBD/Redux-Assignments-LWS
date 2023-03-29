const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
  isLoading: false,
  matchedVideos: [],
  isError: null,
};

// async thunk function
const fetchMatchVideo = createAsyncThunk(
  "videos/fetchMatchVideo",
  async (tags) => {
    let queryString =
      tags?.length > 0
        ? tags
          .map((tag) => `tags_like=${tag}`)
          .concat(["_sort=views", "_order=desc"])
          .join("&")
        : `_sort=views&_order=desc`;

    const res = await fetch(`http://localhost:9000/videos?${queryString}`);
    const videos = await res.json();

    return videos;
  }
);

const matchVideoSlice = createSlice({
  name: "matchedVideos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMatchVideo.pending, (state) => {
      state.isLoading = true;
      state.matchedVideos = [];
      state.isError = null;
    });

    builder.addCase(fetchMatchVideo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.matchedVideos = action.payload;
      state.isError = null;
    });

    builder.addCase(fetchMatchVideo.rejected, (state, action) => {
      state.isLoading = false;
      state.matchedVideos = [];
      state.isError = action.error.message;
    });
  },
});

module.exports = matchVideoSlice.reducer;
module.exports.fetchMatchVideo = fetchMatchVideo;

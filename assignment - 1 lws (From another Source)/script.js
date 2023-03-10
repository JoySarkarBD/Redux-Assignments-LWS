// select dom elements
const matchesEl = document.querySelector(".all-matches");
const addMatchEl = document.querySelector(".lws-addMatch");
const resetEl = document.querySelector(".lws-reset");

// action identifiers
const ADD_MATCH = "add";
const INCREMENT = "increment";
const DECREMENT = "decrement";
const DELETE_MATCH = "delete";
const RESET = "reset";

// action creators
const addMatch = () => {
  return {
    type: ADD_MATCH,
    payload: {
      total: 0,
    },
  };
};

const increment = (matchId, value) => {
  return {
    type: INCREMENT,
    payload: {
      id: matchId,
      value,
    },
  };
};

const decrement = (matchId, value) => {
  return {
    type: DECREMENT,
    payload: {
      id: matchId,
      value,
    },
  };
};

const deleteMatch = (matchId) => {
  return {
    type: DELETE_MATCH,
    payload: {
      id: matchId,
    },
  };
};

const resetScore = () => {
  return {
    type: RESET,
  };
};

// initial state
const initialState = {
  uuid: 2,
  matches: [{ id: 1, total: 0 }],
};

// create reducer function
const scoreBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCH: {
      const updatedMatch = {
        ...state,
        uuid: state.uuid + 1,
        matches: [
          ...state.matches,
          { id: state.uuid, total: action.payload.total },
        ],
      };
      return updatedMatch;
    }

    case INCREMENT: {
      const matchId = action.payload.id;
      const value = action.payload.value;

      const updatedMatches = state.matches.map((match) => {
        if (match.id === matchId) {
          return {
            ...match,
            total: match.total + value,
          };
        } else return { ...match };
      });

      const updatedState = {
        ...state,
        matches: updatedMatches,
      };

      return updatedState;
    }

    case DECREMENT: {
      const matchId = action.payload.id;
      const value = action.payload.value;

      const updatedMatches = state.matches.map((match) => {
        if (match.id === matchId) {
          return {
            ...match,
            total: Math.max(match.total - value, 0),
          };
        } else return { ...match };
      });

      const updatedState = {
        ...state,
        matches: updatedMatches,
      };

      return updatedState;
    }

    case DELETE_MATCH: {
      const matchId = action.payload.id;

      const updatedMatches = state.matches.filter(
        (match) => match.id !== matchId
      );

      const updatedState = {
        ...state,
        matches: updatedMatches,
      };

      return updatedState;
    }

    case RESET: {
      const updatedMatches = state.matches.map((match) => ({
        ...match,
        total: 0,
      }));

      const updatedState = {
        ...state,
        matches: updatedMatches,
      };

      return updatedState;
    }

    default: {
      return state;
    }
  }
};

// create store
const store = Redux.createStore(scoreBoardReducer);

// for increment , decrement & delete
const attachEventListeners = () => {
  const incrementEl = document.querySelectorAll(".incrementForm");
  const decrementEl = document.querySelectorAll(".decrementForm");
  const deleteEl = document.querySelectorAll(".lws-delete");

  console.log(Array.from);

  Array.from(incrementEl).forEach((el) => {
    el.addEventListener("submit", function (e) {
      e.preventDefault();

      const matchId = Number(this.dataset.matchId);
      const value = Number(this.elements.increment.value);
      const absValue = Math.abs(value);
      store.dispatch(increment(matchId, absValue));
    });
  });

  Array.from(decrementEl).forEach((el) => {
    el.addEventListener("submit", function (e) {
      e.preventDefault();

      const matchId = Number(this.dataset.matchId);
      const value = Number(this.elements.decrement.value);
      const absValue = Math.abs(value);
      store.dispatch(decrement(matchId, absValue));
    });
  });

  Array.from(deleteEl).forEach((el) => {
    el.addEventListener("click", function () {
      const matchId = Number(this.dataset.matchId);
      store.dispatch(deleteMatch(matchId));
    });
  });
};

// create a new match
const newMatch = (match) => {
  const { id, total } = match;

  return ` <div class="match">
  <div class="wrapper">
    <button class="lws-delete" data-match-id=${id}>
      <img src="./image/delete.svg" alt="" />
    </button>
    <h3 class="lws-matchName">Match ${id}</h3>
  </div>
  <div class="inc-dec">
    <form class="incrementForm" data-match-id=${id}>
      <h4>Increment</h4>
      <input type="number" name="increment" class="lws-increment" />
    </form>
    <form class="decrementForm" data-match-id=${id}>
      <h4>Decrement</h4>
      <input type="number" name="decrement" class="lws-decrement" />
    </form>
  </div>
  <div class="numbers">
    <h2 class="lws-singleResult">${total}</h2>
  </div>
</div>`;
};

// update ui
const render = () => {
  const state = store.getState();
  const allMatches = state.matches;
  console.log(state);
  const newlyadded = allMatches.map((match) => newMatch(match)).join();
  matchesEl.innerHTML = newlyadded;
  attachEventListeners();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
addMatchEl.addEventListener("click", () => store.dispatch(addMatch()));
resetEl.addEventListener("click", () => store.dispatch(resetScore()));

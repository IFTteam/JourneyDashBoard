import {
 // CREATE_TUTORIAL,
  RETRIEVE_JOURNEYS,
  //UPDATE_TUTORIAL,
  //DELETE_TUTORIAL,
  //DELETE_ALL_TUTORIALS,
} from "../actions/types";

const initialState = [];

function journeyReducer(journeys = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // case CREATE_TUTORIAL:
    //   return [...tutorials, payload];

    case RETRIEVE_JOURNEYS:
      return payload;

    // case UPDATE_TUTORIAL:
    //   return tutorials.map((tutorial) => {
    //     if (tutorial.id === payload.id) {
    //       return {
    //         ...tutorial,
    //         ...payload,
    //       };
    //     } else {
    //       return tutorial;
    //     }
    //   });

   // case DELETE_TUTORIAL:
   //   return tutorials.filter(({ id }) => id !== payload.id);

   // case DELETE_ALL_TUTORIALS:
   //   return [];

    default:
      return journeys;
  }
};

export default journeyReducer;
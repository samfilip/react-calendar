const initialState = {
  days: [['', [{}]], ['', [{}]]]
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
    case "FETCH_DATA": {

    let slicedData = Object.entries(action.payload).slice(0, 15);
    console.log('slicedData: ', slicedData)
 
     return {
       ...state, 
       days: slicedData,
     }
    }
    default:
      return state;
    }
};

export default reducer;
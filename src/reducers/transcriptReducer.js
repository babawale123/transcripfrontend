import { GET_STUDENT_FAILED, GET_STUDENT_REQUEST, GET_STUDENT_SUCCESS, GET_TRANSCRIPT_FAILED, GET_TRANSCRIPT_REQUEST, GET_TRANSCRIPT_SUCCESS } from "../constants/transcriptConstants";

export const transcriptReducer = (state={transcripts:[]},action) => {
    switch (action.type) {
        case GET_TRANSCRIPT_REQUEST:
            return {loading:true}
        case GET_TRANSCRIPT_SUCCESS:
            return {loading:false, success:true, transcripts:action.payload}
        case GET_TRANSCRIPT_FAILED:
            return {loading:false, errors:action.payload}
        default:
            return state;
    }
}

export const studentReducer = (state={students:[]}, action) => {
    switch (action.type) {
        case GET_STUDENT_REQUEST:
            return {loading: true}
        case GET_STUDENT_SUCCESS:
            return {loading:false, success:true, students:action.payload}
        case GET_STUDENT_FAILED:
            return {loading:false, error:action.payload}    
        default:
            return state;
    }
}
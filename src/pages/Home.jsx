import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { studentAction, transcriptsAction } from '../actions/transcriptAction'
import Spinner from '../components/Spinner'

const Home = () => {
    const dispatch = useDispatch()
    const transcript = useSelector((state)=>state.transcript)
    const {loading,success,transcripts,errors} = transcript

    const student = useSelector((state)=>state.student)
    const {loading:stdLoading,success:stdSuccess,students,errors:stdError} = student

    const handleFetch = () => {
        dispatch(transcriptsAction())
    }

    const FetchStudent = () => {
        dispatch(studentAction())
    }

    useEffect(()=>{
        handleFetch()
    },[])

    useEffect(()=>{
        FetchStudent()
    },[])

  return (
    <div className='container-fluid'>
        <Navbar />
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8 ' style={{color:'green'}}><h1 className='text-center' style={{textAlign:'justify'}}>FEDERAL COLLEGE OF FORESTRY, JOS</h1><h4 className='text-center'>Student Transcript</h4></div>
            <div className='col-md-2'></div>
        </div>
        {students && students.map((item,index)=>(
        <div className='container row mt-3'>
            <div className='col-md-3 text-center'>
            <h3>{item.first_name}</h3>
            </div>

            <div className='col-md-3 text-center'>
                <h3>{item.last_name}</h3>
            </div>

            <div className='col-md-3 text-center'>
                <h3>{item.level}level</h3>
            </div>

            <div className='col-md-3 text-center'>
                <h3>{item.matric_no}</h3>
            </div>
        </div>
            ))}
            
        {errors && <div className='alert alert-danger mt-3'>{errors}</div>}
        {loading && <Spinner />}
        <table className="mt-5 table table-light table-hover">
            <thead>
            <tr>
                <th>Couse Title</th>
                <th>Unit</th>
                <th>Score</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            {transcripts && transcripts.map((item,index)=>(
                <tr key={index}>
                    <td>{item.courseTitle}</td>
                    <td>{item.unit}</td>
                    <td>{item.score}</td>
                    <td>{item.grade}</td>
                </tr>
            ))}
            
            </tbody>
     </table>
    </div>
  )
}

export default Home
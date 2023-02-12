



// {/* function EditVolunteerProfile() {


// //     const params = useParams();
// //     console.log('params:', params)
// //     const dispatch = useDispatch();

// //     const volunteerToEdit = useSelector.store((store) => store.volunteerToEdit)

// //     useEffect(() => {
// //         console.log('params.id is working', params.id)
// //         dispatch({
// //             type: 'FETCH_VOLUNTEER_TO_EDIT',
// //             payload: params.id
// //         })
// //     }, []) //DOES PARAMS ID GO IN THE BRACKETS????



// //     const handleVolunterProfileEdit = (event) => {
// //         event.preventDefault();
// //         disptach({
// //             type: 'SET_VOLUNTEER_EDIT',
// //             payload: event.target.value
// //         })
// //     }

// //     return (
// //         <div>
// //             <h2>Edit Volunteer Profile</h2>
// //                 <form>
// //                     <input 
// //                         type="text"
// //                         value={volunteerToEdit.firstName || ''}
// //                         onChange={handleVolunterProfileEdit}
// //                     />

// //                     <input 
// //                         type="text"
// //                         value={volunteerToEdit.lastName || ''}
// //                         onChange={handleVolunterProfileEdit}
// //                     />  
                    
// //                     <button>Submit Edits</button>
// //                 </form>
// //         </div>
// //     )
// // }
import {useRouter} from "next/navigation"
import {useState} from "react"

const TicketForm = () => {
    const startingTicketData = {
        title: "",
        description : "",
        priority :  1,
        progress: "not started",
        category: "Hardware Problem" 
    }
    const [formData, setFormData] = useState(startingTicketData)
    const handleChange = ( e ) => {
        const value = e.target.value
        const name = e.target.name
        setFormData((prevState)=>( {

            ...prevState,
            [name]:value
        }))
    }

    const handleSubmit = () => {

    }

    return <div className="flex justify-center">
    <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
        <h3>Create Your Ticket</h3>
        <label htmlFor="Title">Title</label>
        <input placeholder="name " type="text" id="title" name="title" onChange={handleChange} required={true} value={formData.title} />
        <label htmlFor="Title">Description</label>
        <textarea placeholder="type description... "  id="description" name="description" onChange={handleChange} required={true} value={formData.description} rows={5} />
    </form>
    </div>
}

export default TicketForm
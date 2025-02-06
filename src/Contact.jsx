function Contact(props) {
    return(
        <div className="flex flex-col items-center">
            <div className="border-1 border-black p-1 rounded-md w-3/4">
                <h1 className="text-lg font-bold">Contact Information</h1>
                <p>Email: <span className="text-blue-500">{props.email}</span></p>
                <p>Phone: <span className="text-blue-500">{props.phone}</span></p>
                <p>Address: <span className="text-blue-500">{props.address}</span></p>
            </div>
        </div>
    )
}

export default Contact;
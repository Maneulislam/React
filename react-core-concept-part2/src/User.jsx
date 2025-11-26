
export default function User({ user }) {

    const { name, email, phone } = user;

    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}
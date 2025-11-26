
export default function User({ user }) {

    const { name, company, address } = user;

    return (
        <div className="box">
            <h2>Name: {name}</h2>
            <p>Company Name: {company.name}</p>
            <p>City: {address.city}</p>
        </div>
    )
}
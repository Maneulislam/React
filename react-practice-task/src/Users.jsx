import { use } from "react";
import User from "./User";

export default function Users({ handleFetch }) {

    const users = use(handleFetch);


    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    )
}
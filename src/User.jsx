export default function User({user}){
    const {name, email} = user;

    return(
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}
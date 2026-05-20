

function UserCard(props) {
  return (
    <div>
        <div className="card bg-amber-100 rounded-2xl border-2 col-end-2 p-3 m-1.5">
            <h2 className="bold text-2xl">Name: {props.name}</h2>
            <h4>Role: {props.role}</h4>
        </div>
        
    </div>
  )
}

export default UserCard

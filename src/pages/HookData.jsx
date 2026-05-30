import useFetch from "../components/useFetch"
import UserCard from "../components/UserCard"

const HookData = () => {
    const {data, loading}= useFetch('https://jsonplaceholder.typicode.com/users')
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div className="flex mt-5 p-5 justify-center items-center flex-wrap gap-5 bg-gray-500 pt-20 pb-20">
            {data.map(user => <UserCard key={user.id} name={user.name} email={user.email} role={user.role} />)}
        </div>
    )
}

export default HookData
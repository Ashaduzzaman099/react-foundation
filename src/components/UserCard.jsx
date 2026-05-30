

function UserCard(props) {
  return (
   <div className="max-w-sm mx-auto">
  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    
    <div className="flex items-center gap-4 mb-4">
      <div className="w-14 h-14 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xl font-bold">
        {props.name?.charAt(0)}
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800">
          {props.name}
        </h2>
        <p className="text-sm text-gray-500">
          {props.role}
        </p>
      </div>
    </div>

    <div className="border-t pt-4">
      <p className="text-gray-600">
        <span className="font-semibold">Email:</span> {props.email}
      </p>
    </div>

  </div>
</div>
  )
}

export default UserCard

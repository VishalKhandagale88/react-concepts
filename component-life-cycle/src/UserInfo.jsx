/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
function UserInfo({user}) {
  return (
    <div>
        <h2>User Information : </h2>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
        <p>passWord : {user.password}</p>
    </div>
  )
}

export default UserInfo
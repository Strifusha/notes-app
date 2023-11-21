import '../styles/UserName.css'

function UserName({userNameInput, setUserNameInput}) {
  const hasNums = str => /\d/.test(str)

  return (
    <div className="nameWrapper" data-title="numbers are required">
      <input
        type="text"
        className="usernameInput"
        placeholder="username"
        // value={userNameInput}
        onChange={e => setUserNameInput(e.target.value)}
      />
      {!hasNums(userNameInput) && <p className="err-helper">Invalid username</p>}
    </div>
  )
}

export default UserName

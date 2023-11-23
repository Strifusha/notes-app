import '../styles/UserName.css'
import {useLocalization} from '../localization/LocalizationContext'

function UserName({userNameInput, setUserNameInput}) {
  const hasNums = str => /\d/.test(str)
  const {numRequired, name, invalName} = useLocalization()

  return (
    <div className="nameWrapper" data-title={numRequired}>
      <input
        type="text"
        className="usernameInput"
        placeholder={name}
        onChange={e => setUserNameInput(e.target.value)}
      />
      {!hasNums(userNameInput) && <p className="err-helper">{invalName}</p>}
    </div>
  )
}

export default UserName

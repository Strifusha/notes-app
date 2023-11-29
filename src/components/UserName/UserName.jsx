import './UserName.css'
import {useLocalization} from '../../localization/LocalizationContext'

function UserName({setUserNameInput}) {
  const {numNotRequired, name} = useLocalization()

  return (
    <div className="nameWrapper" data-title={numNotRequired}>
      <input
        type="text"
        className="usernameInput"
        placeholder={name}
        onChange={e => setUserNameInput(e.target.value)}
      />
    </div>
  )
}

export default UserName

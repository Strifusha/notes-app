import '../styles/DeleteNote.css'
import {useLocalization} from '../localization/LocalizationContext'

function DeleteNote({onClose}) {
  const {sureDelete, confirm, cancel} = useLocalization()
  return (
    <div className="modal-delete">
      <div className="confirm-delete">
        <p>{sureDelete}</p>
        <div>
          <button type="button" className="confirmDeleteBtn">
            {confirm}
          </button>
          <button type="button" onClick={onClose} className="cancelDeleteBtn">
            {cancel}
          </button>
        </div>
      </div>
    </div>
  )
}
export default DeleteNote

import '../styles/SubmitBtn.css'

function SubmitBtn(userPass, userNameInput) {
  return (
    <button type="button" className="submit" onClick={() => console.log(userNameInput, userPass)}>
      Submit
    </button>
  )
}

export default SubmitBtn

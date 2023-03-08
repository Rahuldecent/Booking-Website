import './mailList.css';

function MailList() {
  return (
    <div className='mail'>
        <div className="mailTitle">Save time, save money!</div>
     <span className="mailDesc">Sign up and we'll send the best deals to you</span>
     <div className="mailInputContainer">
        <input type='text' placeholder='Your email address'/>
        <button>Suscribe</button>
     </div>
    </div>
  )
}

export default MailList

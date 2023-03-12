import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailForward, faPhone } from '@fortawesome/free-solid-svg-icons';

interface getInTouchOptionsProp {
    getInTouched: boolean;
}

const GetInTochOptions = ({getInTouched}: getInTouchOptionsProp) => {
  return (
    <div className={`getInTouchOptionsParent ${getInTouched ? 'showOptions' : 'hideOptions'}`}>
        <div className='getInTouchOption'>
            <FontAwesomeIcon icon={faFacebook} /> facebook</div>
        <div className='getInTouchOption'>
            <FontAwesomeIcon icon={faTwitter} />twitter</div>
        <div className='getInTouchOption'>
            <FontAwesomeIcon icon={faLinkedin} />linkedin</div>
        <div className='getInTouchOption'>
            <FontAwesomeIcon icon={faMailForward} />email</div>
        <div className='getInTouchOption'>
            <FontAwesomeIcon icon={faPhone} />call now</div>
    </div>
  )
}

export default GetInTochOptions;
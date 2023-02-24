import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import'./index.scss';
const CV =()=>{
    return(
        <div className='cvcontainer'>
        <a className='cvbtn' href ='/YounesAitOuahdaCv.pdf'>
          <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
          <span className='txt'>CV</span>
          </a>
      </div>
    )
}
export default CV
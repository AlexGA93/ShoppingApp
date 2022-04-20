import Axe1 from '../../media/img/loader/icons8-axe-64color.png';
import Axe2 from '../../media/img/loader/rsz_icons8-axe-64color.png';
import Helmet from '../../media/img/loader/icons8-viking-helmet-64.png';

import './LoadingComponent.scss';

const LoadingComponent = () => {
  return (
    <div className="loader_container">
        {/* axe 1 */}
        <div className="loader_container_axe1">
            <img src={Axe1} alt="axe1" />
        </div>
        {/* helmet */}
        <div className="loader_container_helmet">
            <img src={Helmet} alt="helmet" />
        </div>
        {/* axe 2 */}
        <div className="loader_container_axe2">
            <img src={Axe2} alt="axe1" />
        </div> 
        
        
    </div>
  )
}

export default LoadingComponent
import { Home } from '../../../../common/interface/interface';
import ModalButtonComponent from './buttonComponent';

interface ModalButtonParentProp {
    indexOfClickedHouse: number;
    width: number;
    knowMore?: boolean;
    filteredDataArray: Array<Home>;
}

const ModalButtonParent = ({indexOfClickedHouse, width, knowMore, filteredDataArray}: ModalButtonParentProp) => {
    return (
        <div className={`buttonParents ${knowMore || knowMore === undefined ? 'showMore' : 'hideMore'} ${width <= 850 ? "smallSizeButtonParent" : ''}`}>
            <ModalButtonComponent filteredDataArray={filteredDataArray} icon={'rating'} label={filteredDataArray[indexOfClickedHouse].ratings.toString()} />
            <ModalButtonComponent filteredDataArray={filteredDataArray} index={indexOfClickedHouse} icon={'bookmark'} label='Collect' />
            <ModalButtonComponent filteredDataArray={filteredDataArray} index={indexOfClickedHouse} icon={'heart'} label='Like' />
            <ModalButtonComponent filteredDataArray={filteredDataArray} icon={'price'} label={filteredDataArray[indexOfClickedHouse].price.toString()} />
            <ModalButtonComponent filteredDataArray={filteredDataArray} icon={'bhk'} label={filteredDataArray[indexOfClickedHouse].bhk.toString()} />
        </div>
    )
}

export default ModalButtonParent;
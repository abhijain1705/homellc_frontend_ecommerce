import { useDispatch, useSelector } from 'react-redux';
import IconParent from './iconParent';
import { housesData } from '../../data/houses';
import { toggleToBookmark, toggleToHeart } from '../../../../redux/cart';
import { State } from '../../../../common/interface/interface';

interface ImageColumnProp {
    columnNumber: number;
    arrayLength: number;
    openModel: () => void;
    passDataOfCurrentClickedHome(index: number): void;
}

const ImageColumn = ({ columnNumber, openModel, arrayLength, passDataOfCurrentClickedHome }: ImageColumnProp) => {

    let selector = useSelector((state: State) => state);

    const dispatch = useDispatch();


    function ToggleHomeToHeart(index: number, url: string) {
        dispatch(toggleToHeart({ id: index, url: url, email: selector.user.email }));
    }

    function ToggleHomeToBookmark(index: number, url: string) {
        dispatch(toggleToBookmark({ id: index, url: url, email: selector.user.email }));
    }

    function callFunctions(index: number) {
        openModel();
        passDataOfCurrentClickedHome(index);
    }

    return (
        <div className='imageColParent'>
            {housesData.slice(columnNumber, columnNumber + arrayLength)
                .map((itm, ind) => {
                    return <div key={ind} className="imageCellCol">
                        <img alt="houses" src={itm.imageUrl} />
                        <IconParent index={columnNumber+ind} addHomeToBookmark={() => ToggleHomeToBookmark(ind, itm.imageUrl)} addHomeToHeart={() => ToggleHomeToHeart(ind, itm.imageUrl)} />
                        <div onClick={() => callFunctions(columnNumber + ind)} className='clickAlert'>Click me To know more</div>
                    </div>
                })}
        </div>
    )
}

export default ImageColumn;
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../../../common/interface/interface";
import { Liked, BookMarked, Check } from "../../../../common/components/svg";
import { checkIfBookmarked, checkIfLiked } from "../../../../common/logic/logic";
import { housesData } from "../../data/houses";

interface IconParentProp {
    addHomeToHeart?(): void;
    addHomeToBookmark?(): void;
    index?: number;
    toggleModel?(value: boolean, place?: string): void;
}

const IconParent = ({ addHomeToHeart, addHomeToBookmark, index, toggleModel }: IconParentProp) => {
    const { user, cart } = useSelector((state: State) => state);

    function whichIconToPut(icon: string) {
        let selector = cart[user.email] === undefined ? { heart: [], bookmark: [] } : cart[user.email];
        let checkBookmarked = checkIfBookmarked(selector, housesData[index!].imageUrl);
        let checkLiked = checkIfLiked(selector, housesData[index!].imageUrl);
        if ((icon === "bookmark" &&
            checkBookmarked) || (icon === "heart" &&
                checkLiked)) {
            return <Check />
        } else if (icon === "bookmark" &&
            !checkBookmarked) {
            return <BookMarked />
        } else if (icon === "heart" &&
            !checkLiked) {
            return <Liked />
        }
    }

    function whichFunctionToCall(place: string) {
        if (place === 'like') {
            if (addHomeToHeart !== undefined) {
                addHomeToHeart();
            } else if (cart[user.email].heart.length > 0) {
                toggleModel!(true, 'heart');
            }
        } else if (place === 'bookmark') {
            if (addHomeToBookmark !== undefined) {
                addHomeToBookmark();
            } else if (cart[user.email].bookmark.length > 0) {
                toggleModel!(true, 'bookmark');
            }
        }
    }
    
    return (
        <div className="iconParent">
            <div className="icon" onClick={() => whichFunctionToCall('like')}>
                {index !== undefined ? whichIconToPut("heart") : <Liked />}
                <span>{addHomeToBookmark === undefined && cart[user.email] ? cart[user.email].heart.length : ''}</span>
            </div>
            <div className="icon" onClick={() => whichFunctionToCall('bookmark')}>
                {index !== undefined ? whichIconToPut("bookmark") : <BookMarked />}
                <span>{addHomeToBookmark === undefined && cart[user.email] ? cart[user.email].bookmark.length : ''}</span>
            </div>
        </div>
    );
};

export default IconParent;

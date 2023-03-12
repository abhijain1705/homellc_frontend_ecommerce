import { motion } from "framer-motion";
import {
    Liked,
    BookMarked,
    DownArrow,
    Price,
    Check,
    Star,
} from "../../../../common/components/svg";
import { useDispatch, useSelector } from "react-redux";
import {
    checkIfBookmarked,
    checkIfLiked,
} from "../../../../common/logic/logic";
import { Home, State } from "../../../../common/interface/interface";
import { toggleToHeart, toggleToBookmark } from "../../../../redux/cart";

interface ButtonComponentProp {
    icon: string;
    label: string;
    filteredDataArray: Array<Home>;
    index?: number;
    getInTouched?: boolean;
    toggleknowMore?(): void;
    openOptionsToTouch?(): void;
}

const ModalButtonComponent = ({ icon, label, filteredDataArray, index, getInTouched, toggleknowMore, openOptionsToTouch }: ButtonComponentProp) => {

    const variants = {
        clicked: {
            transform: "rotate(180deg)",
        },
        notClicked: {
            transform: "rotate(0deg)",
        },
    };

    const dispatch = useDispatch();
    const { user, cart } = useSelector((state: State) => state);

    function ToggleHomeToHeart(index: number, url: string) {
        dispatch(toggleToHeart({ id: index, url: url, email: user.email }));
    }

    function ToggleHomeToBookmark(index: number, url: string) {
        dispatch(toggleToBookmark({ id: index, url: url, email: user.email }));
    }

    function whichFunctionToCall() {
        if (icon === "bookmark" && index !== undefined) {
            ToggleHomeToBookmark(index, filteredDataArray[index].imageUrl);
        } else if (icon === "heart" && index !== undefined) {
            ToggleHomeToHeart(index, filteredDataArray[index].imageUrl);
        } else if (icon === "list") {
            toggleknowMore!();
        }
    }

    function whichIconToPut() {
        if (index !== undefined) {
            let selector = cart[user.email] === undefined ? { heart: [], bookmark: [] } : cart[user.email];
            let checkBookmarked = checkIfBookmarked(selector, filteredDataArray[index].imageUrl);
            let checkLiked = checkIfLiked(selector, filteredDataArray[index].imageUrl);
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
        } else {
            if (icon === "price") {
                return <Price />
            } else if (icon === "bhk") {
                return "BHK"
            } else if (icon === "downArrow") {
                return <DownArrow />
            } else if (icon === 'rating') {
                return <Star />
            }
        }
    }

    return (
        <div
            onClick={whichFunctionToCall}
            className={`buttonComponent ${icon === "downArrow" ? "contactButton" : ""
                }`}
        >
            <motion.div
                onClick={openOptionsToTouch!}
                initial={icon === "downArrow" ? "notClicked" : ""}
                variants={variants}
                animate={
                    getInTouched! && icon === "downArrow" ? "clicked" : "notClicked"
                }
                transition={{ duration: 0.5 }}
            >
                {whichIconToPut()}
            </motion.div>
            {label}
        </div>
    );
};

export default ModalButtonComponent;

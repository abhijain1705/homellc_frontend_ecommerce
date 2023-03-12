import { useState } from "react";
import Homepage from "./components/homepagcomponents/homepage";
import Sidebar from "./components/sidebarcomponents/sidebar";
import "./styles/style.css";
import { useSelector } from "react-redux";
import { State } from "../../common/interface/interface";
import { Cancel, Next, Previous } from "../../common/components/svg";
import CustomModal from "./components/modalcomponents/customModal";
import { UseSizeContext } from "../../screenContext/context";
import { housesData } from "./data/houses";
import { Home } from "../../common/interface/interface";

const HomeScreen = () => {
    const { width } = UseSizeContext();

    const [showSideBar, setshowSideBar] = useState(false);
    const [indexOfClickedHouse, setindexOfClickedHouse] = useState(0);
    const [showModel, setshowModel] = useState(false);
    const [filteredDataArray, setfilteredDataArray] = useState<Array<Home>>(housesData);
    const {user, cart} = useSelector((state: State) => state);

    function toggleModel(value: boolean, place?: string) {
        if (!value && showModel) {
            setshowModel(false);
        } else {
            if (place === 'heart' && cart[user.email]) {
                const LikedHouses = filteredDataArray.filter(obj1 =>
                    cart[user.email].heart.some(obj2 => obj1.imageUrl === obj2.url)
                );
                setfilteredDataArray(LikedHouses);
                setshowModel(true);
            } else if (place === 'bookmark' && cart[user.email]) {
                const bookedHouses = filteredDataArray.filter(obj1 =>
                    cart[user.email].bookmark.some(obj2 => obj1.imageUrl === obj2.url)
                );
                setfilteredDataArray(bookedHouses);
                setshowModel(true);
            } else {
                setfilteredDataArray(housesData);
                setshowModel(true);
            }
        }
    }

    let lastHouseIndex = filteredDataArray.length - 1;

    function toggleSideBar() {
        if (width <= 600) {
            setshowSideBar(!showSideBar);
        }
    }

    function passDataOfCurrentClickedHome(index: number) {

        setindexOfClickedHouse(index);
    }

    function changeToNext() {
        setindexOfClickedHouse(
            indexOfClickedHouse === lastHouseIndex ? lastHouseIndex : indexOfClickedHouse + 1
        );
    }

    function changeToPrevious() {
        setindexOfClickedHouse(
            indexOfClickedHouse === 0 ? 0 : indexOfClickedHouse - 1
        );
    }

    return (
        <div className="home">
            <Sidebar showSideBar={showSideBar} />
            <CustomModal
                filteredDataArray={filteredDataArray}
                indexOfClickedHouse={indexOfClickedHouse}
                showModel={showModel}
            />
            <div
                onClick={() => toggleModel(false)}
                className={`${width <= 850 ? 'smallScreenCancelButton' : 'cancel'} modelControlButtons ${showModel ? "showBack" : "hideBack"
                    }`}
            >
                <Cancel />
            </div>
            <div
                onClick={changeToNext}
                className={`modelControlButtons next ${showModel ? "showBack" : "hideBack"
                    } ${indexOfClickedHouse === lastHouseIndex ? "limit" : 'notLimit'}`}
            >
                <Next />
            </div>
            <div
                onClick={changeToPrevious}
                className={`modelControlButtons previous ${showModel ? "showBack" : "hideBack"
                    } ${indexOfClickedHouse === 0 ? "limit" : 'notLimit'}`}
            >
                <Previous />
            </div>
            <Homepage
                passDataOfCurrentClickedHome={passDataOfCurrentClickedHome}
                toggleModel={toggleModel}
                toggleSideBar={toggleSideBar}
            />
            <div
                onClick={() => toggleModel(false)}
                className={`backdrop ${showModel ? "showBack" : "hideBack"}`}
            ></div>
        </div>
    );
};

export default HomeScreen;

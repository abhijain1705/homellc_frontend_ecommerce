import { Location } from "../../../../common/components/svg";
import { UseSizeContext } from "../../../../screenContext/context";
import GetInTochOptions from "./getInTouchOptions";
import { useState } from "react";
import ModalButtonParent from "./modalButtonParent";
import ModalButtonComponent from "./buttonComponent";
import { Home } from "../../../../common/interface/interface";

interface CustomModalProp {
  showModel: boolean;
  indexOfClickedHouse: number;
  filteredDataArray: Array<Home>;
}

const CustomModal = ({ showModel, indexOfClickedHouse, filteredDataArray }: CustomModalProp) => {
  const [getInTouched, setgetInTouched] = useState(false);
  function openOptionsToTouch() {
    setgetInTouched(!getInTouched);
  }

  const { width } = UseSizeContext();

  const [knowMore, setknowMore] = useState(false);
  function toggleknowMore() {
    setknowMore(!knowMore);
  }

  return (
    <div className={`customModal ${showModel ? "showModal" : "hideModal"}`}>
      <div className="modalFirstChild">
        <div className="modalLocation">
          <Location /> {filteredDataArray[indexOfClickedHouse].location}
        </div>
        {width > 850 ? (
          <ModalButtonParent
            width={width}
            filteredDataArray={filteredDataArray}
            indexOfClickedHouse={indexOfClickedHouse}
          />
        ) : (
          <>
            <ModalButtonComponent filteredDataArray={filteredDataArray} toggleknowMore={toggleknowMore} icon="list" label="know more" />
            <ModalButtonParent
              knowMore={knowMore}
              width={width}
              filteredDataArray={filteredDataArray}
              indexOfClickedHouse={indexOfClickedHouse}
            />
          </>
        )}
        <ModalButtonComponent filteredDataArray={filteredDataArray} getInTouched={getInTouched} openOptionsToTouch={openOptionsToTouch} icon={'downArrow'} label='Get In touch' />
      </div>
      <div className="modalImageParent">
        <img
          className="modalImage"
          src={filteredDataArray[indexOfClickedHouse].imageUrl}
          alt="clickedhouse"
        />
      </div>
      <GetInTochOptions getInTouched={getInTouched} />
    </div>
  );
};

export default CustomModal;

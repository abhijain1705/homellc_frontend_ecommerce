import { Menu } from "../../../../common/components/svg";
import FilterRow from "./filterRow";
import Header from "./header";
import ImageColumn from "./imageColumn";
import { UseSizeContext } from "../../../../screenContext/context";

interface HomepageProp {
  toggleSideBar(): void;
  toggleModel(value: boolean, place?: string): void;
  passDataOfCurrentClickedHome(index: number): void;
}

const Homepage = ({ toggleSideBar, toggleModel, passDataOfCurrentClickedHome }: HomepageProp) => {
  const { width } = UseSizeContext();

  return (
    <div className="homepageParent">
      <Header toggleModel={toggleModel} />
      <FilterRow />
      <div className="homepage">
        {width > 850 ? (
          <>
            <ImageColumn passDataOfCurrentClickedHome={passDataOfCurrentClickedHome} openModel={() => toggleModel(true)} arrayLength={16} columnNumber={0} />
            <ImageColumn passDataOfCurrentClickedHome={passDataOfCurrentClickedHome} openModel={() => toggleModel(true)} arrayLength={16} columnNumber={16} />
            <ImageColumn passDataOfCurrentClickedHome={passDataOfCurrentClickedHome} openModel={() => toggleModel(true)} arrayLength={16} columnNumber={32} />
          </>
        ) : width > 400 ? (
          <>
            <ImageColumn passDataOfCurrentClickedHome={passDataOfCurrentClickedHome} openModel={() => toggleModel(true)} arrayLength={24} columnNumber={0} />
            <ImageColumn passDataOfCurrentClickedHome={passDataOfCurrentClickedHome} openModel={() => toggleModel(true)} arrayLength={24} columnNumber={24} />
          </>
        ) :
          (
            <ImageColumn passDataOfCurrentClickedHome={passDataOfCurrentClickedHome} openModel={() => toggleModel(true)} arrayLength={48} columnNumber={0} />
          )}
      </div>
      <div onClick={toggleSideBar} className="menuButton">
        <Menu />
      </div>
    </div>
  );
};

export default Homepage;

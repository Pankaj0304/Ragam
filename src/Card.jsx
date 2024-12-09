// import KoalaBear from './assets/react.svg'
// import data from `data.json`

function Card(prop) {
    const styles = {
      backgroundColor: prop.bgcol,
    };
    const currentData = prop.data[prop.index]?.timeframes?.time;
    return (
      <div id={prop.idname} style={styles}>
        <div className="innerele">
          <div id="header">
            <div id="heading">
              {prop.idname === "SelfCare" ? "Self Care" : prop.idname}
            </div>
            <div id="moreOptions">...</div>
          </div>
          {currentData ? (
            <>
              <div id="timespend">{currentData.current}hr{currentData.current!==1?"s":""}</div>
              <div id="prevTime">Last Week - {currentData.previous}hr{currentData.previous>1?"s":""}</div>
            </>
          ) : (
            <div>Data not available ☹️</div>
          )}
        </div>
      </div>
    );
  }
  
  export default Card;
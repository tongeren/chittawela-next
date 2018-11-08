import { Fragment } from 'react';

const arrow = (props) => {
  let attachedClasses = (props.direction === "right" 
    ? [props.className, "Arrow", "Right"] 
    : [props.className, "Arrow", "Left"]);

  return(
    <Fragment>
      <div className={attachedClasses.join(' ')} onClick={ props.clickFunction }> 
        { props.glyph }
      </div>
      <style jsx>{`
        .Arrow {
	        display: flex;
	        width: 40px; /* need relative aspect conserving scaling to viewport here */
	        height: 40px; 
	        border-radius: 50%;
	        background: #fff;
	        opacity: 0.7;
	        align-items: center;
	        justify-content: center;
        }

        .Arrow:hover {
  	      opacity: 1;
        }
  
        .Right {
	        max-width: 40px;
        }

        .Left {
	        max-width: 40px;
        }

      `}
      </style>
    </Fragment>
  );
}

export default arrow;

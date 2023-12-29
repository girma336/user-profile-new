import classNames from 'classnames';
import './Skeleton.css';

const Skeleton = ({ times, className }) => {
const outerClassNames = classNames(
    'outer__skeleton',
    className
);
const inerClassNames = classNames(
    'inner__skeleton'
)
   const boxes = Array(times)
     .fill(0)
     .map((_, i) => {
    return ( 
        <div key={i} className={outerClassNames} >
            <div className={inerClassNames} />
        </div>
    );
   });

   return boxes;
    
}

export default Skeleton
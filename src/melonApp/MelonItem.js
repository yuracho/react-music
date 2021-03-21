import React from 'react';
import { AiOutlineVideoCamera , AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDash ,AiOutlineHeart} from "react-icons/ai";
import  numeral from 'numeral'

const MelonItem = ( {item, onLike} ) => {
    const {rank , title, poster, singer, done, state , like } = item     
    return (
        <tr>
            <td>{rank} </td>
            <td>
                <img src={poster} alt="" width="50" />
                {title}
            </td>
            <td>{singer} </td>
            <td>
                <i onClick={() => onLike(rank)}>
                    { done ? <AiOutlineHeart color="red" /> : <AiOutlineHeart color="#333"/>}
                </i>
                { numeral(like).format(0,0) }
            </td>
            <td> <i> <AiOutlineVideoCamera /> </i></td>
            <td>
                  {state === '상승' && <i><AiOutlineArrowUp color="red" /></i>}  
                  {state === '하강' && <i><AiOutlineArrowDown color="blue" /></i>}  
                  {state === '유지' && <i><AiOutlineDash style={{color:'#333'}} /></i>}  
            </td>
        </tr>
    );
};

export default MelonItem;
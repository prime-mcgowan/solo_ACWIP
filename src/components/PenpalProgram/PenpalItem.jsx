import { useHistory } from "react-router-dom";

function PenpalItem({ penpal }) {

    const history = useHistory();

    const showMePenpalDetails = () => {
        history.push(`/penpals/${penpal.id}`);
    }

    return (
        
        <button onClick={showMePenpalDetails}>
            {penpal.name}
        </ button>
    )

}

export default PenpalItem;
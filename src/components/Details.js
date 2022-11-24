import { useLocation } from "react-router-dom";

const Details = () => {

    const search = useLocation().search;

    const objectId = new URLSearchParams(search).get('objectId');

    return <div>{objectId}</div>;
};

export default Details;
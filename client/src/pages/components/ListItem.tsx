import { Link } from "react-router-dom";
import ButtonComponent from './Button';
import { ItemProps } from "../../types";

const ListItem: React.FC<ItemProps>  = ({ item, isactive, onClick }) => {
    return (
        <li className={isactive ? 'list-item active' : 'list-item'}>
            <div className={'list-item-actions'}>
                <div>ID: <b>{item.id}</b></div>
                <ButtonComponent onClick={onClick} id={item.id} disabled={isactive}>
                    {isactive ? 'Active' : 'Set Active'}
                </ButtonComponent>
            </div>
            <Link to={`../${item.id}`}>
                <div>{item.name}</div>
                <div className={'list-item__description'}>{item.description}</div>
            </Link>
        </li>
    )
}

export default ListItem;
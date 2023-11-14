import PropTypes from 'prop-types';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8 flex flex-col'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16  max-w-7xl mx-auto">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link className='self-center' to={`/order/${title}`}>
                <button className="btn btn-outline border-0  border-b-4 my-4">Order Now</button>
            </Link>
        </div>
    );
};

MenuCategory.propTypes = {
    items:PropTypes.array,
    title:PropTypes.string,
    img:PropTypes.string
};

export default MenuCategory;
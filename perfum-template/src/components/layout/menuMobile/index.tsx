import { useAppContext } from "../../../hooks";

const MenuMobile = () => {
    const { ChangeSecondColor, showMenu } = useAppContext();

  return (
    <div 
    className={`${ChangeSecondColor ? 'bg-primary' : 'bg-white' } 
    ${showMenu ? 'block' : 'hidden'}
    h-screen w-full fixed
    `}
    >
        <div>
          <a>aa</a>
        </div>

    </div>
);
}

export default MenuMobile;

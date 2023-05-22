'use client'

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiWindmill, GiIsland, GiBoatFishing, GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property property has windmills'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property property is modern'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property property is in the countryside'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property property has a pool'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property property is on a island'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property property is close to a lake'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property property has skiing activities'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property property is in a castle'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property property has camping activities'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property property has snow'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property property is near a cave'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property property is near a desert'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property property is near a barn'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This is a luxury property'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathName = usePathname();
    const isMainPage = pathName === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories;
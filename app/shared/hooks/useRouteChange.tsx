import { useAtom } from 'jotai';
import { sideBarActiveItem } from "@/app/configs/constants";

const useRoutChange = () => {
    const [activeRoute, setActiveRoute] = useAtom(sideBarActiveItem);
    return { activeRoute, setActiveRoute };
}

export default useRoutChange;
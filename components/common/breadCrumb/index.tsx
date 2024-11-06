import Link from "next/link"
//Components
import { BreadCrumbsInterface } from "@/constant/breadCrumbsInterface"
//Styles
import Styles from '@/styles/breadCrumbs.module.css'

const BreadCrumbs: React.FC<BreadCrumbsInterface> = ({navigation}) =>  {

    return (
        <>
        <ul className={Styles.list}>
            {navigation.map((item, i) => <li className={i === navigation.length - 1 ? Styles.active: Styles.disabled}><Link href={item.path}>{`${item.step} ${i!== navigation.length - 1 ? '/ ' : ''}`}</Link></li>)}
        </ul>
        </>
    )
}

export default BreadCrumbs

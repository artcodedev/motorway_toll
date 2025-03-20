import style from '../../Style/Components/UIKit/UIBUtton.module.scss'

interface Props {
    title: string
    onCLickButton: () => void
}

const UIButton = ({...pr}: Props) => {
    return (
        <>
            <button className={style['UIButton']} onClick={pr.onCLickButton}>{pr.title}</button>
        </>
    );
}

export default UIButton;
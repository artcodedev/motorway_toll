
import style from '../../Style/Components/UIKit/UICheckBoxLabel.module.scss';

interface Props {
    check: boolean
    error: boolean
    onClick: () => void
}

const UICheckBoxLabel = ({ ...pr }: Props) => {

    return (
        <>
            <div className={style['UICheckBoxLabel']}>
                <div className={style['UICheckBoxLabel_wrap']}>

                    <div className={style['UICheckBoxLabel_wrap_cont']}>
                        <input
                            className={style['UICheckBoxLabel_wrap_cont_input']}
                            type="checkbox"
                            checked={pr.check}
                            onClick={pr.onClick}
                            style={pr.error ? { border: '1px solid red' } : {}}
                        />
                    </div>

                    <div className={style['UICheckBoxLabel_wrap_cont']}>
                        <div className={style['UICheckBoxLabel_wrap_cont_label']}>
                            Accept the T&Cs
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UICheckBoxLabel;
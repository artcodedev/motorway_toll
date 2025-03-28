


import style from '../../Style/Components/UIKit/UIOptions.module.scss';


interface DataOptions {
    value: string
    title: string
}

interface Props {
    title: string
    data: DataOptions[]
    value?: string
    selected?: string | null
    handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void | undefined
}

const UIOptions = ({ ...pr }: Props) => {

    // const vehicle = useStepsStore.getState().vehicle

    return (
        <>

            <div className={style['UIOptions']}>

                <div className={style['UIOptions_title']}>
                    {pr.title}<span>*</span>
                </div>

                <select
                    className={style['UIOptions_select']}
                    // value={pr.value}
                    onChange={pr.handleChange}
                >

                    {pr.data.map((e) => <option value={e.value} selected={pr.selected === e.value ? true : false} >{e.title}</option>)}

                </select>
            </div>
        </>
    );
}


export default UIOptions;
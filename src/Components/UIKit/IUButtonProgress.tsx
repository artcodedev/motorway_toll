
import style from '../../Style/Components/UIKit/UIButtonProgress.module.scss';


const UIButtonProgress = () => {

    return (
        <>
            <button className={style['UIButtonProgress']}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                    <circle fill="#FFF" stroke="#FFF" stroke-width="15" r="15" cx="40" cy="100">
                        <animate attributeName="opacity" calcMode="spline" dur="3.7" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4" />
                    </circle>
                    <circle fill="#FFF" stroke="#FFF" stroke-width="15" r="15" cx="100" cy="100">
                        <animate attributeName="opacity" calcMode="spline" dur="3.7" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2" />
                    </circle>
                    <circle fill="#FFF" stroke="#FFF" stroke-width="15" r="15" cx="160" cy="100">
                        <animate attributeName="opacity" calcMode="spline" dur="3.7" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0" />
                    </circle>
                </svg>
            </button>
        </>
    );
}

export default UIButtonProgress;
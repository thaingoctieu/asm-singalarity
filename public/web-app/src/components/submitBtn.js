import style from './component.module.css'

export const Btn = (props) => {
    return (
        <button type="submit"
            style={style.button}>
            {props.value}
        </button>
    )
}

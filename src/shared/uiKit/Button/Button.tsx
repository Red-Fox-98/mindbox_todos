import {FC} from "react";
import Styles from "./Button.module.scss"
import clsx from "clsx";
import {buttonType} from "src/widgets/home/todos/helper";
import {useTranslation} from "react-i18next";

interface ButtonProps {
    type: buttonType;
    isActive?: boolean;
    onClick?: (nameBtn: buttonType) => void;
    clearCompleted?: () => void;
}

const Button: FC<ButtonProps> = ({type, isActive, onClick, clearCompleted}) => {
    const {t} = useTranslation();
    return (
        <button className={clsx(Styles.btn, isActive && Styles.btnActive)}
                onClick={() => {
                    onClick?.(type);
                    clearCompleted?.();
                }}>{t(`homePage.tasks.${type}`)}</button>
    );
}

export default Button;

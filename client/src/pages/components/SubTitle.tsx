import { ChildrenProps } from "../../types";

const SubTitle = ({ children }: ChildrenProps) => {
    return (
        <h2 className={'list-subtitle'}>Active Item ID: {children}</h2>
    )
}

export default SubTitle;
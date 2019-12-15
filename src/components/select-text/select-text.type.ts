import { WithStyles } from '@material-ui/core/styles';

export type State = {
    value: string,
    selected?: string
    result?: string
    copied: boolean
}

export interface TypeProps extends WithStyles {
    children?: React.ReactNode;
    className?: string;
}
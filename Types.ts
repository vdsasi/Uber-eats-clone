export interface Props {
    text: String,
    selected: String,
    switch: (value: String)  => void;
}
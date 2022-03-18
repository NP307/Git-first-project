export function  Inc(number, isIncrement) {
    const {dispatch} = this.props;
    const action = {
        type: 'INCREMENT',
        number,
        isIncrement
    };
    dispatch(action);
}

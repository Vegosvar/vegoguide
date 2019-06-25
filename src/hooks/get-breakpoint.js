import { useSelector } from 'react-redux';

export default () => {
  const breakpoints = useSelector(state => state.App.breakpoints);
  const width = useSelector(state => state.App.screen.width);

  return breakpoints.reduce(
    (currentBreakpoint, breakpoint) =>
      width < breakpoint.value ? currentBreakpoint : breakpoint,
    0
  );
};

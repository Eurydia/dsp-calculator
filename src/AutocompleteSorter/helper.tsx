import { FC, HTMLAttributes } from "react";
import {
  AutocompleteRenderOptionState,
  MenuItem,
  Tooltip,
  Typography,
  FilterOptionsState,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import { matchSorter } from "match-sorter";
import { Sorter } from "../types";
import { grey } from "@mui/material/colors";

interface CustomDetailProps {
  label: string;
  value: string;
}
const TooltipDetail: FC<CustomDetailProps> = (props) => {
  return (
    <Grid container columns={2} alignItems="start">
      <Grid item xs={1}>
        <Typography>{props.value}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography>{props.label}</Typography>
      </Grid>
    </Grid>
  );
};

export const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Sorter,
  state: AutocompleteRenderOptionState,
) => {
  return (
    <MenuItem {...props}>
      <Tooltip
        followCursor
        placement="right-start"
        title={
          <Stack
            padding={1}
            spacing={1}
            textTransform="capitalize"
            divider={
              <Divider flexItem sx={{ backgroundColor: grey[300] }} />
            }
          >
            <TooltipDetail
              label="work consumption"
              value={`${option.work_consumption} MW`}
            />
            <TooltipDetail
              label="idle consumption"
              value={`${option.idle_consumption} MW`}
            />
          </Stack>
        }
      >
        <Typography textTransform="capitalize">
          {option.label}
        </Typography>
      </Tooltip>
    </MenuItem>
  );
};

export const filterOptions = (
  options: Sorter[],
  state: FilterOptionsState<Sorter>,
): Sorter[] => {
  const value = state.inputValue;

  return matchSorter(options, value, {
    keys: [(item) => item.label],
  });
};
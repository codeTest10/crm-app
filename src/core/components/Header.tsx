import * as React from "react";
import { Grid } from "@material-ui/core";
import { Title } from "./Title";

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header: React.FunctionComponent<IHeaderProps> = (
  props: IHeaderProps
) => {
  const { children } = props;

  return (
    <Grid item xs={12}>
      <Title>{children}</Title>
    </Grid>
  );
};

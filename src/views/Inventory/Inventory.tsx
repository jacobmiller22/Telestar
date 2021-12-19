import React, { useState } from "react";
import getTheme from "theme";
import _ from "lodash";
import Link from "next/link";
import useSWR from "swr";
import axios from "axios";

/** Interfaces/types */
import { EThemeMode } from "interfaces/Theme";
import { IInventoryItem, IInventoryItemMap } from "interfaces/Inventory";

/** Components */
import Grid from "@mui/material/Grid";
import MuiToolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { SearchBar, Filter } from "./components";

/** Icons */
import MonetizationOnIcon from "@mui/icons-material/MonetizationOnOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import CarIcon from "@mui/icons-material/DirectionsCar";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { Box, ListItemText } from "@mui/material";

/** Icons */

const goals: any[] = [];

const ICON_SIZE = 60;

const Inventory = () => {
  const [filterValue, setFilterValue] = useState<string[]>([]);

  const fetcher = (url: string) => axios.get(url).then((res) => res);
  const { data: items, error: itemsError } = useSWR("/api/inventory", fetcher);
  // const { data: types, error: typesError } = useSWR(
  //   "/api/inventory/types",
  //   fetcher
  // );

  const types = calculateTypes(items?.data);

  const theme = getTheme(EThemeMode.LIGHT);

  const renderInventory = () => {
    if (!items || !items.data) {
      return null;
    }

    const inventoryItems = items.data;

    return (
      <>
        <Grid item xs={2}>
          <List>
            <ListItem>
              <ListItemText>Name</ListItemText>
            </ListItem>
            {_.map(Object.keys(inventoryItems), (key, i) => {
              return (
                <>
                  <Divider />
                  <ListItem key={`inventory-item-name-${i}`}>
                    <ListItemText
                      primaryTypographyProps={{
                        noWrap: true,
                      }}
                    >
                      {inventoryItems[key].name}
                    </ListItemText>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Grid>
        <Grid item xs>
          <List>
            <ListItem>
              <ListItemText>Note</ListItemText>
            </ListItem>
            {_.map(Object.keys(inventoryItems), (key, i) => {
              return (
                <>
                  <Divider />
                  <ListItem key={`inventory-item-note-${i}`}>
                    <ListItemText
                      primaryTypographyProps={{
                        noWrap: true,
                      }}
                    >
                      {inventoryItems[key].note ?? "-"}
                    </ListItemText>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={2}>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  noWrap: true,
                }}
              >
                Location
              </ListItemText>
            </ListItem>
            {_.map(Object.keys(inventoryItems), (key, i) => {
              return (
                <>
                  <Divider />
                  <ListItem key={`inventory-item-location-${i}`}>
                    <ListItemText
                      primaryTypographyProps={{
                        noWrap: true,
                      }}
                    >
                      {inventoryItems[key].location_id}
                    </ListItemText>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={1}>
          <List>
            <ListItem>
              <ListItemText>Type</ListItemText>
            </ListItem>
            {_.map(Object.values(inventoryItems), (item: IInventoryItem, i) => {
              return (
                <>
                  <Divider />
                  <ListItem key={`inventory-item-type-${i}`}>
                    <ListItemText
                      primaryTypographyProps={{
                        noWrap: true,
                      }}
                    >
                      {item.type}
                    </ListItemText>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Grid>
      </>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MuiToolbar>
        <SearchBar options={types} />
        <div style={{ flexGrow: 1 }} />
        <List>
          <ListItem>
            <Filter state={{ filterValue, setFilterValue }} options={types} />
          </ListItem>
        </List>
      </MuiToolbar>
      <Divider />
      <Grid container sx={{ minHeight: "100vh", maxWidth: "100%" }}>
        {renderInventory()}
      </Grid>
    </Box>
  );
};

export default Inventory;

const calculateTypes = (items: IInventoryItemMap | undefined): string[] => {
  if (!items) {
    return [];
  }

  const unique_items: IInventoryItem[] = _.uniqBy(
    Object.values(items),
    (item) => item.type
  );

  const types: string[] = _.map(unique_items, (item) => item.type);

  return types;
};

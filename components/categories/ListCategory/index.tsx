"use client";

import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
//List category
import { listCategory } from "@/constant";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//styles
import Styles from "@/styles/category.module.css";

const ListCategory = () => {
  const [listItem, setListItem] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = (category: string) => {
    setListItem(category);
    if (listItem === category) {
      setOpen(!open);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <List component="nav" sx={{ pt: 5 }} className={Styles.nav}>
        {listCategory.map((item) => (
          <>
            <ListItemButton onClick={() => handleClick(item.text)}>
              <ListItemText primary={item.text} />
              {item.subMenu && (
                <span>
                  {open && listItem === item.text ? (
                    <FontAwesomeIcon icon="angle-up" />
                  ) : (
                    <FontAwesomeIcon icon="angle-down" />
                  )}
                </span>
              )}
            </ListItemButton>
            <Collapse
              in={open && listItem === item.text}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={item.subMenu} />
                </ListItemButton>
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </>
  );
};
export default ListCategory;
